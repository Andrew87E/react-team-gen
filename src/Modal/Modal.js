import React, { useState } from "react";
import Manager from "./Manager";
import Engineer from "./Engineer";
import Intern from "./Intern";
import $ from "jquery";


function Modal() {
    const [showModal, setShowModal] = useState(false);
    const [formState, setFormState] = useState(false);
    const selectedOption = $('.form-select');
    const selectedOptionValue = selectedOption.val();

    const formRender = () => {
        if (formState === 'Manager'){
            return <Manager />
        } else if(formState === 'Engineer') {
            return <Engineer />
        } else if (formState === 'Intern') {
            return <Intern />
        }
    }

    const dblFunc = () => {
        setShowModal(false) 
        setFormState(false)
    }

    const handleSubmit = () => {

    }

    // Helper function to clear out the review form after submission
// const emptyForm = () => {
//     userNameInput.value = '';
//     productInput.value = '';
//     reviewInput.value = '';
//   };
  

    return (
        <>
            {showModal ? (<div id="modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">


                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            onClick={() => dblFunc()}
                        >
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                            <span className="sr-only"></span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add an Employee</h3>
                            <form className="space-y-6" action="#">
                                <div className="flex justify-center">
                                    <select
                                        onChange={(e) => setFormState(e.target.value)}
                                        defaultValue={"Select"}
                                        className="form-select form-select-lg mb-3 
                                            appearance-none
                                            block
                                            w-full
                                            px-4
                                            py-2
                                            text-xl
                                            font-normal
                                            text-white
                                            dark:bg-gray-600 bg-no-repeat
                                            border border-solid border-gray-300
                                            rounded-lg
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-white focus:dark:bg-gray-600 focus:border-blue-600 focus:outline-none"
                                        aria-label=".form-select-lg"
                                    >
                                        <option value="Select">Select an Employee Type</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Engineer">Engineer</option>
                                        <option value="Intern">Intern</option>
                                    </select>
                                </div>
                                    {
                                        formRender()
                                    }
                                    <div>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                        onClick={handleSubmit()}
                                        >
                                            Submit
                                        </button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>) : null}

            <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"
                onClick={() => setShowModal(true)}
            >
                Add Another Employee
            </button>
        </>
    );


}

export default Modal;