import RegisterPatientModal from "./RegisterPatientModal"
import {useState} from "react"

export default function NotRegisteredPatient({account}) {
    const [showModal, setShowModal] = useState(false)
    const hideModal = () => {setShowModal(false)}

    const handleButtonClick = () =>{
        //show modal
        setShowModal(true)
    }

    return (
        <div>
            <div className="alert alert-warning shadow-lg md:mt-5 md:ml-4 mt-3 md:w-4/5">
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
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                    <span>
                        <span className="font-semibold text-lg">
                            Alert: Nao registrado <br />
                        </span>
                        Voce <span className="font-semibold">NÃO</span>{" "}
                        esta registrado como{" "}
                        <span className="font-semibold italic">Paciente</span> no
                        sistema. Se desejar{" "}
                        <span className="font-semibold italic">
                            Cadastrar Agora
                        </span>{" "}
                        by clicking below and filling a form...
                    </span>
                </div>
            </div>
            <div>
                <RegisterPatientModal
                    isVisible={showModal}
                    onClose={() => {
                        setShowModal(false)
                    }}
                    account={account}
                />
                </div>
            <div className="text-center">
                <button
                    className="btn btn-primary mt-10 btn-md"
                    onClick={handleButtonClick}
                >
                    Registrar 
                </button>
            </div>
        </div>
    )
}
