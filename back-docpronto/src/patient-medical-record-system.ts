import { 
  AccessGrant, 
  AccessLog, 
  AccessRevoke, 
  Doctor, 
  Hospital, 
  Nurse, 
  Patient, 
  PublicKey, 
  ReceptionRecord, 
  TriageRecord, 
  AmbulatoryRecord, 
  Medication, 
  Note 
} from "../generated/schema";
import { 
  AccessGranted, 
  AccessLogged, 
  AccessRevoked, 
  AddedDoctor, 
  AddedHospital, 
  AddedNurse, 
  AddedPatient, 
  AddedPublicKey, 
  AmbulatoryRecorded, 
  MedicationAdded, 
  NoteAdded, 
  ReceptionRecorded, 
  TriageRecorded 
} from "../generated/PatientMedicalRecordSystem/PatientMedicalRecordSystem";
import { BigInt, Bytes } from "@graphprotocol/graph-ts";

export function handleAccessGranted(event: AccessGranted): void {
  let accessGrant = new AccessGrant(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  accessGrant.patient = event.params.patient;
  accessGrant.medicalStaff = event.params.medicalStaff;
  accessGrant.timestamp = event.block.timestamp;
  accessGrant.save();
}

export function handleAccessLogged(event: AccessLogged): void {
  let accessLog = new AccessLog(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  accessLog.patient = event.params.patient;
  accessLog.accessor = event.params.accessor;
  accessLog.action = event.params.action;
  accessLog.timestamp = event.block.timestamp;
  accessLog.save();
}

export function handleAccessRevoked(event: AccessRevoked): void {
  let accessRevoke = new AccessRevoke(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  accessRevoke.patient = event.params.patient;
  accessRevoke.medicalStaff = event.params.medicalStaff;
  accessRevoke.timestamp = event.block.timestamp;
  accessRevoke.save();
}

export function handleAddedDoctor(event: AddedDoctor): void {
  let doctor = new Doctor(event.params.doctorAddress.toHex());
  doctor.doctorAddress = event.params.doctorAddress;
  doctor.name = event.params.name;
  doctor.doctorRegistrationId = event.params.doctorRegistrationId;
  doctor.dateOfRegistration = event.params.dateOfRegistration;
  doctor.specialization = event.params.specialization;
  doctor.hospitalAddress = event.params.hospitalAddress;
  doctor.save();
}

export function handleAddedHospital(event: AddedHospital): void {
  let hospital = new Hospital(event.params.hospitalAddress.toHex());
  hospital.hospitalAddress = event.params.hospitalAddress;
  hospital.name = event.params.name;
  hospital.hospitalRegistrationId = event.params.hospitalRegistrationId;
  hospital.dateOfRegistration = event.params.dateOfRegistration;
  hospital.email = event.params.email;
  hospital.phoneNumber = event.params.phoneNumber;
  hospital.save();
}

export function handleAddedNurse(event: AddedNurse): void {
  let nurse = new Nurse(event.params.nurseAddress.toHex());
  nurse.nurseAddress = event.params.nurseAddress;
  nurse.name = event.params.name;
  nurse.nurseRegistrationId = event.params.nurseRegistrationId;
  nurse.dateOfRegistration = event.params.dateOfRegistration;
  nurse.hospitalAddress = event.params.hospitalAddress;
  nurse.save();
}

export function handleAddedPatient(event: AddedPatient): void {
  let patient = new Patient(event.params.patientAddress.toHex());
  patient.patientAddress = event.params.patientAddress;
  patient.name = event.params.name;
  patient.dob = event.params.dob;
  patient.bloodGroup = event.params.bloodGroup;
  patient.dateOfRegistration = event.params.dateOfRegistration;
  patient.publicKey = event.params.publicKey;
  patient.vaccinationHash = event.params.vaccinationHash;
  patient.phoneNumber = event.params.phoneNumber;
  patient.accidentHash = event.params.accidentHash;
  patient.chronicHash = event.params.chronicHash;
  patient.acuteHash = event.params.acuteHash;
  patient.save();
}

export function handleAddedPublicKey(event: AddedPublicKey): void {
  let publicKey = new PublicKey(event.params.patientAddress.toHex());
  publicKey.patientAddress = event.params.patientAddress;
  publicKey.publicKey = event.params.publicKey;
  publicKey.save();
}

export function handleAmbulatoryRecorded(event: AmbulatoryRecorded): void {
  let ambulatoryRecord = new AmbulatoryRecord(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  ambulatoryRecord.patientAddress = event.params.patient; // Corrigido para event.params.patient
  ambulatoryRecord.doctorAddress = event.params.doctor;
  ambulatoryRecord.timestamp = event.block.timestamp;
  ambulatoryRecord.diagnosis = event.params.diagnosis;
  ambulatoryRecord.treatment = event.params.treatment;
  ambulatoryRecord.save();
}

export function handleMedicationAdded(event: MedicationAdded): void {
  let medication = new Medication(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  medication.patientAddress = event.params.patient;
  medication.name = event.params.name;
  medication.dosage = event.params.dosage;
  medication.frequency = event.params.frequency;
  medication.startDate = event.params.startDate;
  medication.endDate = event.params.endDate;
  medication.save();
}

export function handleNoteAdded(event: NoteAdded): void {
  let note = new Note(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  note.patientAddress = event.params.patient;
  note.author = event.params.author;
  note.timestamp = event.block.timestamp;
  note.content = event.params.content;
  note.save();
}

export function handleReceptionRecorded(event: ReceptionRecorded): void {
  let receptionRecord = new ReceptionRecord(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  receptionRecord.patientAddress = event.params.patient;
  receptionRecord.receptionistAddress = event.params.receptionist;
  receptionRecord.timestamp = event.block.timestamp;
  receptionRecord.notes = event.params.notes;
  receptionRecord.save();
}

export function handleTriageRecorded(event: TriageRecorded): void {
  let triageRecord = new TriageRecord(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  triageRecord.patientAddress = event.params.patient;
  triageRecord.nurseAddress = event.params.nurse;
  triageRecord.timestamp = event.block.timestamp;
  triageRecord.condition = event.params.condition;
  triageRecord.severity = event.params.severity;
  triageRecord.save();
}
