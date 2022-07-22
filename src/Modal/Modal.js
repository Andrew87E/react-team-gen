import React, { useState } from "react";
import Manager from "./Manager";
import Engineer from "./Engineer";
import Intern from "./Intern";
import $ from "jquery";


function Modal() {
    const [showModal, setShowModal] = useState(false);
    const selectedOption = $('.form-select');
    const selectedOptionValue = selectedOption.val();

    return (
        <>
            {showModal ? (<div id="modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">


                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            onClick={() => setShowModal(false)}
                        >
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                            <span className="sr-only"></span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add an Employee</h3>
                            <form className="space-y-6" action="#">
                                <div className="flex justify-center">
                                    <select
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

                                    {   
                                    selectedOption.on('change', function () {
                                    if(selectedOptionValue === "Manager") {
                                        return(  <Manager />)
                                    } else if (selectedOptionValue === "Engineer") {
                                        return (<Engineer />)
                                    } else if (selectedOptionValue === "Intern") {
                                        return(<Intern />)
                                    }
                                      })
                                    }


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

// export default function Modal() {
//   const [showModal, setShowModal] = React.useState(false);
//   return (
//     <>
//       <button
//         classNameName="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//         type="button"
//         onClick={() => setShowModal(true)}
//       >
//         Open regular modal
//       </button>
//       {showModal ? (
//         <>
//           <div
//             classNameName="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//           >
//             <div classNameName="relative w-auto my-6 mx-auto max-w-3xl">
//               {/*content*/}
//               <div classNameName="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 {/*header*/}
//                 <div classNameName="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
//                   <h3 classNameName="text-3xl font-semibold">
//                     Modal Title
//                   </h3>
//                   <button
//                     classNameName="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <span classNameName="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                       ×
//                     </span>
//                   </button>
//                 </div>
//                 {/*body*/}
//                 <div classNameName="relative p-6 flex-auto">
//                   <p classNameName="my-4 text-slate-500 text-lg leading-relaxed">
//                     I always felt like I could do anything. That’s the main
//                     thing people are controlled by! Thoughts- their perception
//                     of themselves! They're slowed down by their perception of
//                     themselves. If you're taught you can’t do anything, you
//                     won’t do anything. I was taught I could do everything.
//                   </p>
//                 </div>
//                 {/*footer*/}
//                 <div classNameName="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
//                   <button
//                     classNameName="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     classNameName="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div classNameName="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}
//     </>
//   );
// }

