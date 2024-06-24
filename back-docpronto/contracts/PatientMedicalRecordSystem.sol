// SPDX-License-Identifier: GPL-3.0-only

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import {DoctorType} from "./DoctorType.sol";
import {HospitalType} from "./HospitalType.sol";
import {PatientType} from "./PatientType.sol";

//errors
error PatientMedicalRecords__NotOwner();
error PatientMedicalRecords__NotDoctor();
error PatientMedicalRecords__NotApproved();
error PatientMedicalRecords__NotPatient();
error PatientMedicalRecords__NotAuthorized();

contract PatientMedicalRecordSystem is ReentrancyGuard {
    //Type Declaration

    //Storage Variables
    mapping(address => PatientType.Patient) private s_patients;
    mapping(address => DoctorType.Doctor) private s_doctors;
    mapping(address => HospitalType.Hospital) private s_hospitals;
    mapping(address => string) private s_addressToPublicKey;
    mapping(address => mapping(address => bool)) public accessPermissions; // track access permissions
    mapping(address => AccessLog[]) public accessLogs; // track access logs

    address private immutable i_owner;

    struct AccessLog {
        address accessor;
        uint256 timestamp;
        string action;
    }

    struct Medication {
        string name;
        uint256 dosage;
        string frequency;
        uint256 startDate;
        uint256 endDate;
    }

    struct Note {
        address author;
        uint256 timestamp;
        string content;
    }

    struct Nurse {
        address nurseAddress;
        string name;
        string nurseRegistrationId;
        uint256 dateOfRegistration;
        address hospitalAddress;
    }

    struct ReceptionRecord {
        address patientAddress;
        address receptionistAddress;
        uint256 timestamp;
        string notes;
    }

    struct TriageRecord {
        address patientAddress;
        address nurseAddress;
        uint256 timestamp;
        string condition;
        string severity;
    }

    struct AmbulatoryRecord {
        address patientAddress;
        address doctorAddress;
        uint256 timestamp;
        string diagnosis;
        string treatment;
    }

    mapping(address => Nurse) private s_nurses; // track nurses
    mapping(address => ReceptionRecord[]) private patientReceptionRecords; // track reception records
    mapping(address => TriageRecord[]) private patientTriageRecords; // track triage records
    mapping(address => AmbulatoryRecord[]) private patientAmbulatoryRecords; // track ambulatory records
    mapping(address => Medication[]) private patientMedications; // track medications
    mapping(address => Note[]) private patientNotes; // track notes

    //Events
    event AddedPatient(
        address indexed patientAddress,
        string name,
        string[] chronicHash,
        uint256 indexed dob,
        string bloodGroup,
        uint256 indexed dateOfRegistration,
        string publicKey,
        string[] vaccinationHash,
        string phoneNumber,
        string[] accidentHash,
        string[] acuteHash
    ); //added or modified

    event AddedPublicKey(address indexed patientAddress, string publicKey); //emitting when public key is added.

    event AddedDoctor(
        address indexed doctorAddress,
        string name,
        string doctorRegistrationId,
        uint256 indexed dateOfRegistration,
        string specialization,
        address indexed hospitalAddress
    ); //added or modified to the mapping
    event AddedHospital(
        address indexed hospitalAddress,
        string name,
        string hospitalRegistrationId,
        uint256 indexed dateOfRegistration,
        string email,
        string phoneNumber
    ); //added(mostly) or modified

    event AddedNurse(
        address indexed nurseAddress,
        string name,
        string nurseRegistrationId,
        uint256 indexed dateOfRegistration,
        address indexed hospitalAddress
    ); //added or modified to the mapping

    event AccessGranted(address indexed patient, address indexed medicalStaff);
    event AccessRevoked(address indexed patient, address indexed medicalStaff);
    event AccessLogged(address indexed patient, address indexed accessor, string action);
    event MedicationAdded(address indexed patient, string name, uint256 dosage, string frequency, uint256 startDate, uint256 endDate);
    event NoteAdded(address indexed patient, address indexed author, uint256 timestamp, string content);
    event ReceptionRecorded(address indexed patient, address indexed receptionist, uint256 timestamp, string notes);
    event TriageRecorded(address indexed patient, address indexed nurse, uint256 timestamp, string condition, string severity);
    event AmbulatoryRecorded(address indexed patient, address indexed doctor, uint256 timestamp, string diagnosis, string treatment);

    //modifiers
    modifier onlyOwner() {
        if (msg.sender != i_owner) {
            revert PatientMedicalRecords__NotOwner();
        }
        _;
    }

    modifier onlyDoctor(address senderAddress) {
        if (s_doctors[senderAddress].doctorAddress != senderAddress) {
            revert PatientMedicalRecords__NotDoctor();
        }
        _;
    }

    modifier onlyNurse(address senderAddress) {
        if (s_nurses[senderAddress].nurseAddress != senderAddress) {
            revert PatientMedicalRecords__NotAuthorized();
        }
        _;
    }

    modifier onlyAuthorized(address _patientAddress) {
        if (!accessPermissions[_patientAddress][msg.sender] && msg.sender != i_owner) {
            revert PatientMedicalRecords__NotAuthorized();
        }
        _;
    }

    constructor() {
        i_owner = msg.sender;
    }

    //Functions
    //patients can themselves register to the system.
    function registerPatient(
        address _patientAddress,
        string memory _name,
        uint256 _dob,
        string memory _phoneNumber,
        string memory _bloodGroup,
        string memory _publicKey
    ) external nonReentrant {
        if (msg.sender != _patientAddress) {
            revert PatientMedicalRecords__NotPatient();
        }
        PatientType.Patient memory patient;
        patient.name = _name;
        patient.patientAddress = _patientAddress;
        patient.dob = _dob;
        patient.phoneNumber = _phoneNumber;
        patient.bloodGroup = _bloodGroup;
        patient.dateOfRegistration = block.timestamp;
        patient.publicKey = _publicKey; //public key is stored here.

        patient.vaccinationHash = new string[](0); //0
        patient.accidentHash = new string[](0); // 1
        patient.chronicHash = new string[](0); //2
        patient.acuteHash = new string[](0); //3

        s_patients[_patientAddress] = patient;
        s_addressToPublicKey[_patientAddress] = _publicKey;

        //emiting the events
        emit AddedPublicKey(_patientAddress, _publicKey);
        emit AddedPatient(
            _patientAddress,
            patient.name,
            patient.chronicHash,
            patient.dob,
            patient.bloodGroup,
            patient.dateOfRegistration,
            patient.publicKey,
            patient.vaccinationHash,
            patient.phoneNumber,
            patient.accidentHash,
            patient.acuteHash
        );
    }

    function addPatientDetails(
        address _patientAddress,
        uint16 _category,
        string memory _IpfsHash //This is the IPFS hash of the diagnostic report which contains an IPFS file hash (preferably PDF file)
    ) external onlyDoctor(msg.sender) nonReentrant {
        if (_category == 0) {
            s_patients[_patientAddress].vaccinationHash.push(_IpfsHash);
        } else if (_category == 1) {
            s_patients[_patientAddress].accidentHash.push(_IpfsHash);
        } else if (_category == 2) {
            s_patients[_patientAddress].chronicHash.push(_IpfsHash);
        } else if (_category == 3) {
            s_patients[_patientAddress].acuteHash.push(_IpfsHash);
        }
        PatientType.Patient memory patient = s_patients[_patientAddress];
        logAccess(_patientAddress, "Add Patient Details");
        //emitting the event.
        emit AddedPatient(
            _patientAddress,
            patient.name,
            patient.chronicHash,
            patient.dob,
            patient.bloodGroup,
            patient.dateOfRegistration,
            patient.publicKey,
            patient.vaccinationHash,
            patient.phoneNumber,
            patient.accidentHash,
            patient.acuteHash
        );
    }

    //this will be done using script by the owner
    function addDoctorDetails(
        address _doctorAddress,
        string memory _name,
        string memory _doctorRegistrationId,
        uint256 _dateOfRegistration,
        string memory _specialization,
        address _hospitalAddress
    ) external onlyOwner nonReentrant {
        DoctorType.Doctor memory doctor;
        doctor.name = _name;
        doctor.doctorRegistrationId = _doctorRegistrationId;
        doctor.doctorAddress = _doctorAddress;
        doctor.dateOfRegistration = _dateOfRegistration;
        doctor.specialization = _specialization;
        doctor.hospitalAddress = _hospitalAddress;
        s_doctors[_doctorAddress] = doctor;
        //emitting the event.
        emit AddedDoctor(
            _doctorAddress,
            doctor.name,
            doctor.doctorRegistrationId,
            doctor.dateOfRegistration,
            doctor.specialization,
            doctor.hospitalAddress
        );
    }

    //this will be done using script by the owner
    function addHospitalDetails(
        address _hospitalAddress,
        string memory _name,
        string memory _hospitalRegistrationId,
        string memory _email,
        string memory _phoneNumber
    ) external onlyOwner nonReentrant {
        HospitalType.Hospital memory hospital = s_hospitals[_hospitalAddress];
        hospital.hospitalAddress = _hospitalAddress;
        hospital.name = _name;
        hospital.email = _email;
        hospital.phoneNumber = _phoneNumber;
        hospital.hospitalRegistrationId = _hospitalRegistrationId;
        hospital.dateOfRegistration = block.timestamp;
        s_hospitals[_hospitalAddress] = hospital;
        //emitting the event.
        emit AddedHospital(
            hospital.hospitalAddress,
            hospital.name,
            hospital.hospitalRegistrationId,
            hospital.dateOfRegistration,
            hospital.email,
            hospital.phoneNumber
        );
    }

    //this will be done using script by the owner
    function addNurseDetails(
        address _nurseAddress,
        string memory _name,
        string memory _nurseRegistrationId,
        uint256 _dateOfRegistration,
        address _hospitalAddress
    ) external onlyOwner nonReentrant {
        Nurse memory nurse;
        nurse.nurseAddress = _nurseAddress;
        nurse.name = _name;
        nurse.nurseRegistrationId = _nurseRegistrationId;
        nurse.dateOfRegistration = _dateOfRegistration;
        nurse.hospitalAddress = _hospitalAddress;
        s_nurses[_nurseAddress] = nurse;
        //emitting the event.
        emit AddedNurse(
            nurse.nurseAddress,
            nurse.name,
            nurse.nurseRegistrationId,
            nurse.dateOfRegistration,
            nurse.hospitalAddress
        );
    }

    function recordReception(
        address _patientAddress,
        string memory _notes
    ) external {
        require(msg.sender == s_hospitals[_patientAddress].hospitalAddress || msg.sender == i_owner, "Unauthorized");
        ReceptionRecord memory receptionRecord;
        receptionRecord.patientAddress = _patientAddress;
        receptionRecord.receptionistAddress = msg.sender;
        receptionRecord.timestamp = block.timestamp;
        receptionRecord.notes = _notes;
        patientReceptionRecords[_patientAddress].push(receptionRecord);
        emit ReceptionRecorded(_patientAddress, msg.sender, block.timestamp, _notes);
    }

    function recordTriage(
        address _patientAddress,
        string memory _condition,
        string memory _severity
    ) external onlyNurse(msg.sender) {
        TriageRecord memory triageRecord;
        triageRecord.patientAddress = _patientAddress;
        triageRecord.nurseAddress = msg.sender;
        triageRecord.timestamp = block.timestamp;
        triageRecord.condition = _condition;
        triageRecord.severity = _severity;
        patientTriageRecords[_patientAddress].push(triageRecord);
        emit TriageRecorded(_patientAddress, msg.sender, block.timestamp, _condition, _severity);
    }

    function recordAmbulatory(
        address _patientAddress,
        address _doctorAddress,
        string memory _diagnosis,
        string memory _treatment
    ) external onlyDoctor(msg.sender) {
        AmbulatoryRecord memory ambulatoryRecord;
        ambulatoryRecord.patientAddress = _patientAddress;
        ambulatoryRecord.doctorAddress = msg.sender;
        ambulatoryRecord.timestamp = block.timestamp;
        ambulatoryRecord.diagnosis = _diagnosis;
        ambulatoryRecord.treatment = _treatment;
        patientAmbulatoryRecords[_patientAddress].push(ambulatoryRecord);
        emit AmbulatoryRecorded(_patientAddress, msg.sender, block.timestamp, _diagnosis, _treatment);
    }

    function grantAccess(address _patientAddress, address _medicalStaff) external onlyOwner nonReentrant {
        accessPermissions[_patientAddress][_medicalStaff] = true;
        emit AccessGranted(_patientAddress, _medicalStaff);
    }

    function revokeAccess(address _patientAddress, address _medicalStaff) external onlyOwner nonReentrant {
        accessPermissions[_patientAddress][_medicalStaff] = false;
        emit AccessRevoked(_patientAddress, _medicalStaff);
    }

    function logAccess(address _patient, string memory _action) internal {
        accessLogs[_patient].push(AccessLog({
            accessor: msg.sender,
            timestamp: block.timestamp,
            action: _action
        }));
        emit AccessLogged(_patient, msg.sender, _action);
    }

    function addNote(address _patientAddress, string memory _content) external onlyAuthorized(_patientAddress) {
        patientNotes[_patientAddress].push(Note({
            author: msg.sender,
            timestamp: block.timestamp,
            content: _content
        }));
        logAccess(_patientAddress, "Add Note");
        emit NoteAdded(_patientAddress, msg.sender, block.timestamp, _content);
    }

    function addMedication(address _patientAddress, string memory _name, uint256 _dosage, string memory _frequency, uint256 _startDate, uint256 _endDate) external onlyAuthorized(_patientAddress) {
        patientMedications[_patientAddress].push(Medication({
            name: _name,
            dosage: _dosage,
            frequency: _frequency,
            startDate: _startDate,
            endDate: _endDate
        }));
        logAccess(_patientAddress, "Add Medication");
        emit MedicationAdded(_patientAddress, _name, _dosage, _frequency, _startDate, _endDate);
    }

    function getMyDetails() external view returns (PatientType.Patient memory) {
        return s_patients[msg.sender];
    }

    //authorized doctor viewing patient's records
    function getPatientDetails(address _patientAddress)
        external
        view
        onlyAuthorized(_patientAddress)
        returns (
            string memory,
            string memory,
            uint256
        )
    {
        //logAccess(_patientAddress, "Get Patient Details");
        return (
            s_patients[_patientAddress].name,
            s_patients[_patientAddress].publicKey,
            s_patients[_patientAddress].dateOfRegistration
        );
    }

    function getPublicKey(address _patientAddress) public view returns (string memory) {
        return s_addressToPublicKey[_patientAddress];
    }

    function getDoctorDetails(address _doctorAddress)
        external
        view
        returns (
            string memory,
            string memory,
            string memory,
            address
        )
    {
        return (
            s_doctors[_doctorAddress].name,
            s_doctors[_doctorAddress].specialization,
            s_doctors[_doctorAddress].doctorRegistrationId,
            s_doctors[_doctorAddress].hospitalAddress
        );
    }

    function getHospitalDetails(address _hospitalAddress)
        external
        view
        returns (
            string memory,
            string memory,
            string memory
        )
    {
        return (
            s_hospitals[_hospitalAddress].name,
            s_hospitals[_hospitalAddress].hospitalRegistrationId,
            s_hospitals[_hospitalAddress].email
        );
    }

    function getOwner() external view returns (address) {
        return i_owner;
    }

    function getAccessLogs(address _patientAddress) external view onlyAuthorized(_patientAddress) returns (AccessLog[] memory) {
        return accessLogs[_patientAddress];
    }

    function getMedications(address _patientAddress) external view onlyAuthorized(_patientAddress) returns (Medication[] memory) {
        return patientMedications[_patientAddress];
    }

    function getNotes(address _patientAddress) external view onlyAuthorized(_patientAddress) returns (Note[] memory) {
        return patientNotes[_patientAddress];
    }

    function getReceptionRecords(address _patientAddress) external view returns (ReceptionRecord[] memory) {
        require(msg.sender == s_hospitals[_patientAddress].hospitalAddress || msg.sender == i_owner, "Unauthorized");
        return patientReceptionRecords[_patientAddress];
    }

    function getTriageRecords(address _patientAddress) external view onlyAuthorized(_patientAddress) returns (TriageRecord[] memory) {
        return patientTriageRecords[_patientAddress];
    }

    function getAmbulatoryRecords(address _patientAddress) external view onlyAuthorized(_patientAddress) returns (AmbulatoryRecord[] memory) {
        return patientAmbulatoryRecords[_patientAddress];
    }
}
