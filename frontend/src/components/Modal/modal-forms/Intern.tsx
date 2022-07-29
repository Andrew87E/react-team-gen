import axios from "axios";
import $ from 'jquery';

export default function Intern() {

    return (
<>
<div>
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Intern Name</label>
    <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Andrew Edwards" />
</div>
    <div>
        <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Intern ID</label>
        <input type="id" name="id" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="1234" />
    </div>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Intern Email</label>
            <input type="email" name="email" id="email" placeholder="Intern@Company.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>
        <div>
            <label htmlFor="intern-school" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Intern School</label>
            <input type="intern-school" name="intern-school" id="school" placeholder="School Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    let name = $('#name').val();
                                                    let id = $('#id').val();
                                                    let email = $('#email').val()
                                                    let school = $('#school').val()
                                                    if(!name || !id || !email || !school){
                                                        alert('Please enter all values')
                                                      } else { 
                                                    axios.post('/api/employees',{
                                                    name: `${name}`,
                                                    id: `${id}`,
                                                    email: `${email}`,
                                                    school: `${school}`
                                                    })
                                                    .then((response)=>{
                                                      console.log(response)
                                                      $("#modal").hide();
                                                      location.reload();
                                                    })}
                                                  }}
                                        >
                                            Submit
                                        </button>
</>
)
}