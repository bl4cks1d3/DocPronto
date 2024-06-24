import { useState } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { Modal, Input, Select, useNotification } from "web3uikit"
import networkMapping from "../constants/networkMapping.json"
import PatientMedicalRecordSystemAbi from "../constants/PatientMedicalRecordSystem.json"
import dateInUnix from "../utils/dateInUnix"
import NodeRSA from "node-rsa"

export default function RegisterPatientModal({ isVisible, onClose, account }) {
    const dispatch = useNotification()
    const { runContractFunction } = useWeb3Contract()

    const [name, setName] = useState("")
    const [patientAddress, setPatientAddress] = useState(account)
    const [dob, setDob] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [bloodGroup, setBloodGroup] = useState(0)
    const [cancelDisabled, setCancelDisabled] = useState(false)
    const [okDisabled, setOkDisabled] = useState(false)
    const [showKeys, setShowKeys] = useState(false)
    const [publicKey, setPublicKey] = useState("")
    const [privateKey, setPrivateKey] = useState("")

    const { chainId: chainHexId } = useMoralis()
    const chainId = chainHexId ? parseInt(chainHexId).toString() : "31337"
    const medicalRecordSystemAddress =
        networkMapping[chainId].PatientMedicalRecordSystem[0]

    // console.log("I am contract address", medicalRecordSystemAddress)
    // console.log("I am chain Id: ", chainId)
    const handleRegisterPatientSuccess = async (tx) => {
        await tx.wait()
        dispatch({
            type: "success",
            title: "Transaction Successful",
            message:
                "You are now successfully registered to this decentralized medical record database system.",
            position: "bottomL",
        })
        onClose && onClose() //closing the modal on success
        setCancelDisabled(false)
        setOkDisabled(false)
        setShowKeys(false)
    }
    const generateKeys = async () => {
        const key = new NodeRSA({ bits: 2048 })
        const publicKey = key.exportKey("pkcs8-public-pem")
        const privateKey = key.exportKey("pkcs8-private-pem")
        return { publicKey, privateKey }
    }

    const initiateRegisterPatientTransaction = async () => {
        setCancelDisabled(true)
        setOkDisabled(true)
        setShowKeys(true)
        const keys = await generateKeys()
        setPublicKey(keys.publicKey)
        setPrivateKey(keys.privateKey)

        // console.log(`publicKey: ${keys.publicKey}`)
        // console.log(`privateKey: ${privateKey}`)
        dispatch({
            type: "success",
            title: "Public and Private Keys Generated",
            message:
                "Public and Private Key for encrypting your medical files generated successfully",
            position: "bottomL",
            isClosing: !okDisabled && !cancelDisabled,
        })

        //NOTIFICATION FOR GEENRATING PUBLIC AND PRIVATE KEYS

        // ---------Here I am getting the contract function which has to be run for registerPatient -----------------------
        const registerPatientOptions = {
            abi: PatientMedicalRecordSystemAbi,
            contractAddress: medicalRecordSystemAddress,
            functionName: "registerPatient",
            params: {
                _patientAddress: patientAddress,
                _name: name,
                _dob: dob,
                _phoneNumber: 0,    //phoneNumber
                _bloodGroup: bloodGroup,
                _publicKey: keys.publicKey,
            },
        }

        //Acutaly calling the function. [This is where the transaction initiation actually begins].
        await runContractFunction({
            params: registerPatientOptions,
            onError: (error) => {
                console.log(
                    "Error while calling registerPatient function",
                    error
                )
            },
            onSuccess: handleRegisterPatientSuccess,
        })
    }

    const downloadPrivateKey = async () => {
        // console.log("I am a private Key", privateKey)
        const element = document.createElement("a")
        const file = await new Blob(
            [
                privateKey ||
                    "Failed to Generate Private Key... Please cancel the Patient Registration...",
            ],
            {
                type: "text/plain",
            }
        )
        element.href = URL.createObjectURL(file)
        element.download = "privateKey.txt"
        document.body.appendChild(element)
        element.click()
    }
    const downloadPublicKey = async () => {
        // console.log("I am a public key inside function", publicKey)
        const element = document.createElement("a")
        const file = await new Blob(
            [
                publicKey ||
                    "Failed to Generate Public Key... Please cancel the Patient Registration...",
            ],
            {
                type: "text/plain",
            }
        )
        element.href = URL.createObjectURL(file)
        element.download = "publicKey.txt"
        document.body.appendChild(element)
        element.click()
    }

    return (
        <div>
            <Modal
                isVisible={isVisible}
                onCancel={onClose}
                onCloseButtonPressed={onClose}
                onOk={initiateRegisterPatientTransaction}
                okButtonColor="blue"
                isCancelDisabled={cancelDisabled}
                isOkDisabled={okDisabled}
            >
                <div className="mb-5">
                    <Input
                        label="Nome do Paciente"
                        name="Nome do Paciente"
                        type="text"
                        onChange={(event) => {
                            setName(event.target.value)
                        }}
                        validation={{
                            required: true,
                            minLength: 3,
                            maxLength: 20,
                        }}
                    />
                </div>
                <div className="mb-5">
                    <Input
                        label="Insira endereço do Paciente"
                        name="Endereço do Paciente"
                        type="text"
                        onChange={(event) => {
                            setPatientAddress(event.target.value)
                        }}
                        value={account}
                        validation={{
                            required: true,
                            minLength: 42,
                            maxLength: 42,
                        }}
                    />
                </div>
                {/* Date Picker Starts Here */}
                <div className="mb-5">
                    <Input
                        label="Data de Nascimento"
                        name="Data de Nascimento"
                        type="date"
                        onChange={(event) => {
                            setDob(dateInUnix(event.target.value))
                        }}
                        validation={{ required: true }}
                    />
                </div>

                <div className="mb-5">
                    <Select
                        label="Escolha grupo sanguineo"
                        onChangeTraditional={(event) => {
                            setBloodGroup(event.target.value)
                        }}
                        options={[
                            {
                                id: "o-negativo",
                                label: "O negativo",
                            },
                            {
                                id: "o-positivo",
                                label: "O positivo",
                            },
                            {
                                id: "a-negativo",
                                label: "A negativo",
                            },
                            {
                                id: "a-positivo",
                                label: "A positivo",
                            },
                            {
                                id: "b-negativo",
                                label: "B negativo",
                            },
                            {
                                id: "b-positivo",
                                label: "B positivo",
                            },
                            {
                                id: "ab-negativo",
                                label: "AB negativo",
                            },
                            {
                                id: "ab-positivo",
                                label: "AB positivo",
                            },
                        ]}
                        traditionalHTML5
                        validation={{
                            required: true,
                        }}
                    />
                </div>
                {/* <div className="mb-5">
                    <Input
                        label="Enter Phone Number"
                        name="Phone Number"
                        type="text"
                        onChange={(event) => {
                            setPhoneNumber(event.target.value)
                        }}
                        validation={{ required: true }}
                    />
                </div> */}
                {showKeys ? (
                    <div>
                        <div className="alert alert-success shadow-lg mb-4">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current flex-shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>
                                    Guarde sua{" "}
                                    <div
                                        className="tooltip"
                                        data-tip="Nao altere o texto da chave depois de baixar"
                                    >
                                        <span
                                            className="btn btn-sm"
                                            onClick={downloadPublicKey}
                                        >
                                            Chave publica
                                        </span>
                                    </div>{" "}
                                    and{" "}
                                    <div
                                        className="tooltip"
                                        data-tip="Do not Edit this File after Download"
                                    >
                                        <span
                                            className="btn btn-sm"
                                            onClick={downloadPrivateKey}
                                        >
                                            Chave Privada
                                        </span>
                                    </div>
                                </span>{" "}
                                &rarr;{" "}
                                <span>
                                    {" "}
                                    Guarde sua{" "}
                                    <span className="italic font-semibold">
                                        Private Key
                                    </span>{" "}
                                    em um local seguro.
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </Modal>
        </div>
    )
}
