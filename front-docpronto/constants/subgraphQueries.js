import { gql } from "@apollo/client";

const GET_ADDED_DOCTORS = gql`
  {
    doctors(first: 10) {
      id
      doctorAddress
      name
      doctorRegistrationId
      dateOfRegistration
      specialization
      hospitalAddress
    }
  }
`;

const GET_ADDED_HOSPITALS = gql`
  {
    hospitals(first: 10) {
      id
      hospitalAddress
      name
      hospitalRegistrationId
      dateOfRegistration
      email
      phoneNumber
    }
  }
`;

const GET_ADDED_NURSES = gql`
  {
    nurses(first: 10) {
      id
      nurseAddress
      name
      nurseRegistrationId
      dateOfRegistration
      hospitalAddress
    }
  }
`;

const GET_ADDED_PATIENTS = gql`
  {
    patients(first: 10) {
      id
      patientAddress
      name
      dob
      bloodGroup
      dateOfRegistration
      publicKey
      vaccinationHash
      phoneNumber
      accidentHash
      chronicHash
      acuteHash
    }
  }
`;

const GET_PUBLIC_KEYS = gql`
  {
    publicKeys(first: 10) {
      id
      patientAddress
      publicKey
    }
  }
`;

const GET_MEDICATIONS = gql`
  {
    medications(first: 10) {
      id
      patientAddress
      name
      dosage
      frequency
      startDate
      endDate
    }
  }
`;

const GET_NOTES = gql`
  {
    notes(first: 10) {
      id
      patientAddress
      author
      timestamp
      content
    }
  }
`;

const GET_RECEPTION_RECORDS = gql`
  {
    receptionRecords(first: 10) {
      id
      patientAddress
      receptionistAddress
      timestamp
      notes
    }
  }
`;

const GET_TRIAGE_RECORDS = gql`
  {
    triageRecords(first: 10) {
      id
      patientAddress
      nurseAddress
      timestamp
      condition
      severity
    }
  }
`;

const GET_AMBULATORY_RECORDS = gql`
  {
    ambulatoryRecords(first: 10) {
      id
      patientAddress
      doctorAddress
      timestamp
      diagnosis
      treatment
    }
  }
`;

const GET_ACCESS_GRANTS = gql`
  {
    accessGrants(first: 10) {
      id
      patient
      medicalStaff
      timestamp
    }
  }
`;

const GET_ACCESS_LOGS = gql`
  {
    accessLogs(first: 10) {
      id
      patient
      accessor
      action
      timestamp
    }
  }
`;

const GET_ACCESS_REVOKES = gql`
  {
    accessRevokes(first: 10) {
      id
      patient
      medicalStaff
      timestamp
    }
  }
`;

export {
  GET_ADDED_DOCTORS,
  GET_ADDED_HOSPITALS,
  GET_ADDED_NURSES,
  GET_ADDED_PATIENTS,
  GET_PUBLIC_KEYS,
  GET_MEDICATIONS,
  GET_NOTES,
  GET_RECEPTION_RECORDS,
  GET_TRIAGE_RECORDS,
  GET_AMBULATORY_RECORDS,
  GET_ACCESS_GRANTS,
  GET_ACCESS_LOGS,
  GET_ACCESS_REVOKES,
};
