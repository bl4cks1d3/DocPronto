// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class AccessGrant extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccessGrant entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AccessGrant must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("AccessGrant", id.toString(), this);
    }
  }

  static loadInBlock(id: string): AccessGrant | null {
    return changetype<AccessGrant | null>(
      store.get_in_block("AccessGrant", id),
    );
  }

  static load(id: string): AccessGrant | null {
    return changetype<AccessGrant | null>(store.get("AccessGrant", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get patient(): Bytes {
    let value = this.get("patient");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set patient(value: Bytes) {
    this.set("patient", Value.fromBytes(value));
  }

  get medicalStaff(): Bytes {
    let value = this.get("medicalStaff");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set medicalStaff(value: Bytes) {
    this.set("medicalStaff", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class AccessLog extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccessLog entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AccessLog must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("AccessLog", id.toString(), this);
    }
  }

  static loadInBlock(id: string): AccessLog | null {
    return changetype<AccessLog | null>(store.get_in_block("AccessLog", id));
  }

  static load(id: string): AccessLog | null {
    return changetype<AccessLog | null>(store.get("AccessLog", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get patient(): Bytes {
    let value = this.get("patient");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set patient(value: Bytes) {
    this.set("patient", Value.fromBytes(value));
  }

  get accessor(): Bytes {
    let value = this.get("accessor");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set accessor(value: Bytes) {
    this.set("accessor", Value.fromBytes(value));
  }

  get action(): string {
    let value = this.get("action");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set action(value: string) {
    this.set("action", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class AccessRevoke extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccessRevoke entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AccessRevoke must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("AccessRevoke", id.toString(), this);
    }
  }

  static loadInBlock(id: string): AccessRevoke | null {
    return changetype<AccessRevoke | null>(
      store.get_in_block("AccessRevoke", id),
    );
  }

  static load(id: string): AccessRevoke | null {
    return changetype<AccessRevoke | null>(store.get("AccessRevoke", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get patient(): Bytes {
    let value = this.get("patient");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set patient(value: Bytes) {
    this.set("patient", Value.fromBytes(value));
  }

  get medicalStaff(): Bytes {
    let value = this.get("medicalStaff");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set medicalStaff(value: Bytes) {
    this.set("medicalStaff", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Doctor extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Doctor entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Doctor must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Doctor", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Doctor | null {
    return changetype<Doctor | null>(store.get_in_block("Doctor", id));
  }

  static load(id: string): Doctor | null {
    return changetype<Doctor | null>(store.get("Doctor", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get doctorAddress(): Bytes {
    let value = this.get("doctorAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set doctorAddress(value: Bytes) {
    this.set("doctorAddress", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get doctorRegistrationId(): string {
    let value = this.get("doctorRegistrationId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set doctorRegistrationId(value: string) {
    this.set("doctorRegistrationId", Value.fromString(value));
  }

  get dateOfRegistration(): BigInt {
    let value = this.get("dateOfRegistration");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set dateOfRegistration(value: BigInt) {
    this.set("dateOfRegistration", Value.fromBigInt(value));
  }

  get specialization(): string {
    let value = this.get("specialization");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set specialization(value: string) {
    this.set("specialization", Value.fromString(value));
  }

  get hospitalAddress(): Bytes {
    let value = this.get("hospitalAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set hospitalAddress(value: Bytes) {
    this.set("hospitalAddress", Value.fromBytes(value));
  }
}

export class Hospital extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Hospital entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Hospital must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Hospital", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Hospital | null {
    return changetype<Hospital | null>(store.get_in_block("Hospital", id));
  }

  static load(id: string): Hospital | null {
    return changetype<Hospital | null>(store.get("Hospital", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get hospitalAddress(): Bytes {
    let value = this.get("hospitalAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set hospitalAddress(value: Bytes) {
    this.set("hospitalAddress", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get hospitalRegistrationId(): string {
    let value = this.get("hospitalRegistrationId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set hospitalRegistrationId(value: string) {
    this.set("hospitalRegistrationId", Value.fromString(value));
  }

  get dateOfRegistration(): BigInt {
    let value = this.get("dateOfRegistration");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set dateOfRegistration(value: BigInt) {
    this.set("dateOfRegistration", Value.fromBigInt(value));
  }

  get email(): string {
    let value = this.get("email");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set email(value: string) {
    this.set("email", Value.fromString(value));
  }

  get phoneNumber(): string {
    let value = this.get("phoneNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set phoneNumber(value: string) {
    this.set("phoneNumber", Value.fromString(value));
  }
}

export class Nurse extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Nurse entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Nurse must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Nurse", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Nurse | null {
    return changetype<Nurse | null>(store.get_in_block("Nurse", id));
  }

  static load(id: string): Nurse | null {
    return changetype<Nurse | null>(store.get("Nurse", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nurseAddress(): Bytes {
    let value = this.get("nurseAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set nurseAddress(value: Bytes) {
    this.set("nurseAddress", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get nurseRegistrationId(): string {
    let value = this.get("nurseRegistrationId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set nurseRegistrationId(value: string) {
    this.set("nurseRegistrationId", Value.fromString(value));
  }

  get dateOfRegistration(): BigInt {
    let value = this.get("dateOfRegistration");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set dateOfRegistration(value: BigInt) {
    this.set("dateOfRegistration", Value.fromBigInt(value));
  }

  get hospitalAddress(): Bytes {
    let value = this.get("hospitalAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set hospitalAddress(value: Bytes) {
    this.set("hospitalAddress", Value.fromBytes(value));
  }
}

export class Patient extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Patient entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Patient must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Patient", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Patient | null {
    return changetype<Patient | null>(store.get_in_block("Patient", id));
  }

  static load(id: string): Patient | null {
    return changetype<Patient | null>(store.get("Patient", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get patientAddress(): Bytes {
    let value = this.get("patientAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set patientAddress(value: Bytes) {
    this.set("patientAddress", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get dob(): BigInt {
    let value = this.get("dob");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set dob(value: BigInt) {
    this.set("dob", Value.fromBigInt(value));
  }

  get bloodGroup(): string {
    let value = this.get("bloodGroup");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set bloodGroup(value: string) {
    this.set("bloodGroup", Value.fromString(value));
  }

  get dateOfRegistration(): BigInt {
    let value = this.get("dateOfRegistration");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set dateOfRegistration(value: BigInt) {
    this.set("dateOfRegistration", Value.fromBigInt(value));
  }

  get publicKey(): string {
    let value = this.get("publicKey");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set publicKey(value: string) {
    this.set("publicKey", Value.fromString(value));
  }

  get vaccinationHash(): Array<string> {
    let value = this.get("vaccinationHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set vaccinationHash(value: Array<string>) {
    this.set("vaccinationHash", Value.fromStringArray(value));
  }

  get phoneNumber(): string {
    let value = this.get("phoneNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set phoneNumber(value: string) {
    this.set("phoneNumber", Value.fromString(value));
  }

  get accidentHash(): Array<string> {
    let value = this.get("accidentHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set accidentHash(value: Array<string>) {
    this.set("accidentHash", Value.fromStringArray(value));
  }

  get chronicHash(): Array<string> {
    let value = this.get("chronicHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set chronicHash(value: Array<string>) {
    this.set("chronicHash", Value.fromStringArray(value));
  }

  get acuteHash(): Array<string> {
    let value = this.get("acuteHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set acuteHash(value: Array<string>) {
    this.set("acuteHash", Value.fromStringArray(value));
  }
}

export class PublicKey extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PublicKey entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PublicKey must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("PublicKey", id.toString(), this);
    }
  }

  static loadInBlock(id: string): PublicKey | null {
    return changetype<PublicKey | null>(store.get_in_block("PublicKey", id));
  }

  static load(id: string): PublicKey | null {
    return changetype<PublicKey | null>(store.get("PublicKey", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get patientAddress(): Bytes {
    let value = this.get("patientAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set patientAddress(value: Bytes) {
    this.set("patientAddress", Value.fromBytes(value));
  }

  get publicKey(): string {
    let value = this.get("publicKey");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set publicKey(value: string) {
    this.set("publicKey", Value.fromString(value));
  }
}

export class Medication extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Medication entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Medication must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Medication", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Medication | null {
    return changetype<Medication | null>(store.get_in_block("Medication", id));
  }

  static load(id: string): Medication | null {
    return changetype<Medication | null>(store.get("Medication", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get patientAddress(): Bytes {
    let value = this.get("patientAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set patientAddress(value: Bytes) {
    this.set("patientAddress", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get dosage(): BigInt {
    let value = this.get("dosage");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set dosage(value: BigInt) {
    this.set("dosage", Value.fromBigInt(value));
  }

  get frequency(): string {
    let value = this.get("frequency");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set frequency(value: string) {
    this.set("frequency", Value.fromString(value));
  }

  get startDate(): BigInt {
    let value = this.get("startDate");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set startDate(value: BigInt) {
    this.set("startDate", Value.fromBigInt(value));
  }

  get endDate(): BigInt {
    let value = this.get("endDate");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set endDate(value: BigInt) {
    this.set("endDate", Value.fromBigInt(value));
  }
}

export class Note extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Note entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Note must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Note", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Note | null {
    return changetype<Note | null>(store.get_in_block("Note", id));
  }

  static load(id: string): Note | null {
    return changetype<Note | null>(store.get("Note", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get patientAddress(): Bytes {
    let value = this.get("patientAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set patientAddress(value: Bytes) {
    this.set("patientAddress", Value.fromBytes(value));
  }

  get author(): Bytes {
    let value = this.get("author");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set author(value: Bytes) {
    this.set("author", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get content(): string {
    let value = this.get("content");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
  }
}

export class ReceptionRecord extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ReceptionRecord entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ReceptionRecord must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("ReceptionRecord", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ReceptionRecord | null {
    return changetype<ReceptionRecord | null>(
      store.get_in_block("ReceptionRecord", id),
    );
  }

  static load(id: string): ReceptionRecord | null {
    return changetype<ReceptionRecord | null>(store.get("ReceptionRecord", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get patientAddress(): Bytes {
    let value = this.get("patientAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set patientAddress(value: Bytes) {
    this.set("patientAddress", Value.fromBytes(value));
  }

  get receptionistAddress(): Bytes {
    let value = this.get("receptionistAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set receptionistAddress(value: Bytes) {
    this.set("receptionistAddress", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get notes(): string {
    let value = this.get("notes");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set notes(value: string) {
    this.set("notes", Value.fromString(value));
  }
}

export class TriageRecord extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TriageRecord entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TriageRecord must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("TriageRecord", id.toString(), this);
    }
  }

  static loadInBlock(id: string): TriageRecord | null {
    return changetype<TriageRecord | null>(
      store.get_in_block("TriageRecord", id),
    );
  }

  static load(id: string): TriageRecord | null {
    return changetype<TriageRecord | null>(store.get("TriageRecord", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get patientAddress(): Bytes {
    let value = this.get("patientAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set patientAddress(value: Bytes) {
    this.set("patientAddress", Value.fromBytes(value));
  }

  get nurseAddress(): Bytes {
    let value = this.get("nurseAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set nurseAddress(value: Bytes) {
    this.set("nurseAddress", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get condition(): string {
    let value = this.get("condition");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set condition(value: string) {
    this.set("condition", Value.fromString(value));
  }

  get severity(): string {
    let value = this.get("severity");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set severity(value: string) {
    this.set("severity", Value.fromString(value));
  }
}

export class AmbulatoryRecord extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AmbulatoryRecord entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AmbulatoryRecord must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("AmbulatoryRecord", id.toString(), this);
    }
  }

  static loadInBlock(id: string): AmbulatoryRecord | null {
    return changetype<AmbulatoryRecord | null>(
      store.get_in_block("AmbulatoryRecord", id),
    );
  }

  static load(id: string): AmbulatoryRecord | null {
    return changetype<AmbulatoryRecord | null>(
      store.get("AmbulatoryRecord", id),
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get patientAddress(): Bytes {
    let value = this.get("patientAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set patientAddress(value: Bytes) {
    this.set("patientAddress", Value.fromBytes(value));
  }

  get doctorAddress(): Bytes {
    let value = this.get("doctorAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set doctorAddress(value: Bytes) {
    this.set("doctorAddress", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get diagnosis(): string {
    let value = this.get("diagnosis");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set diagnosis(value: string) {
    this.set("diagnosis", Value.fromString(value));
  }

  get treatment(): string {
    let value = this.get("treatment");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set treatment(value: string) {
    this.set("treatment", Value.fromString(value));
  }
}
