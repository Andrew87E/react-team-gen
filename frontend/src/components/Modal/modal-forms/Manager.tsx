import axios from "axios";
import $ from "jquery";

export default function Manager() {
  return (
    <>
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Manager Name
        </label>
        <input
          type="name"
          name="name"
          id="name"
          className="w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Andrew Edwards"
        />
      </div>
      <div>
        <label
          htmlFor="id"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Manager ID
        </label>
        <input
          type="id"
          name="id"
          id="id"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="1234"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Manager Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Manager@Company.com"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
      </div>
      <div>
        <label
          htmlFor="office-number"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Manager Office Number
        </label>
        <input
          type="office-number"
          name="office-number"
          id="office-number"
          placeholder="1234567891"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={(e) => {
          e.preventDefault();
          let name = $("#name").val();
          let id = $("#id").val();
          let email = $("#email").val();
          let officeNumber = $("#office-number").val();
          if(!name || !id || !email || !officeNumber){
            alert('Please enter all values')
          } else { 
          axios
            .post("/api/employees", {
              name: `${name}`,
              id: `${id}`,
              email: `${email}`,
              officeNumber: `${officeNumber}`,
            })
            .then((response) => {
              console.log(response);
              $("#modal").hide();
              location.reload();
            })}
        }}
      >
        Submit
      </button>
    </>
  );
}

// language=TypeScript
// sanitize user input