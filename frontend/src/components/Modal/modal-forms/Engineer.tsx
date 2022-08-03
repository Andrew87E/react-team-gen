import axios from "axios";
import $, { data } from 'jquery'
import { useState, useEffect } from "react";

export default function Engineer() {
  const [submit, setSubmit] = useState('')

  return (
    <>
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Engineer Name
        </label>
        <input
          type="name"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Andrew Edwards"
          required
        />
      </div>
      <div>
        <label
          htmlFor="id"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Engineer ID
        </label>
        <input
          type="id"
          name="id"
          id="id"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="1234"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Engineer Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Engineer@Company.com"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
      <div>
        <label
          htmlFor="github"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Engineer GitHub
        </label>
        <input
          type="github"
          name="github"
          id="github"
          placeholder="GitHub Username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={(e) => {
          e.preventDefault();
          let name = $('#name').val();
          let id = $('#id').val();
          let email = $('#email').val()
          let gitHub = $('#github').val()
          if(!name || !id || !email || !gitHub){
            alert('Please enter all values')
          } else { 
          axios.post('/api/employees',{
          name: `${name}`,
          id: `${id}`,
          email: `${email}`,
          gitHub: `${gitHub}`
          })
          .then((response)=>{
            console.log(response)
            $("#modal").hide();
            $('#cardContain').fadeOut(800, ()=>{
              $('#cardContain').fadeIn().delay(2000)
            })
          })}
        }}
      >
        Submit
      </button>
    </>
  );
}

// language=TypeScript

// sanitize user input data
