import Employees from '../../../db/employees.json';


function Card() {

    function getEmployees() {
        return Employees;
    }

    function renderCard(Employee) {
        const employeeID = Employee.id;
        const enployeeName = Employee.name;
        const employeeEmail = Employee.email;
        // const employeeGit = Employees[0].gitHub;
        // const employeeSchool = Employees[0].school;
        // const employeeOfficeNumber = Employees[0].officeNumber;
        const employeeUnique = (() => {
            if (Employee.hasOwnProperty("gitHub")) {
                return `https://github.com/${Employee.gitHub}`
            } else if (Employee.hasOwnProperty("officeNumber")) {
                return `Office: ${Employee.officeNumber}`
            } else if (Employee.hasOwnProperty("school")) {
                return `Currently enrolled at: ${Employee.school}`
            }
        })();

        const employeeRole = (() => {
            if (Employee.hasOwnProperty("gitHub")) {
                return "Engineer"
            } else if (Employee.hasOwnProperty("officeNumber")) {
                return "Manager"
            } else if (Employee.hasOwnProperty("school")) {
                return "Intern"
            }
        })();
        return (
            <div key={Employee.id} className="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
                <div className="p-4">
                    <span className="text-blue-600 font-normal text-5xl">{employeeRole}</span>
                    <p className="font-semibold text-xl py-2">{enployeeName}</p>
                    <p className="font-semibold text-red-500 text-justify line-clamp-3">#{employeeID}</p>
                    <div className="flex flex-wrap mt-10 space-x-4 align-bottom">
                        <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />

                        <div className="flex flex-col space-y-0">
                            <p className="font-semibold text-base">{employeeEmail}</p>
                            <p className="font-light text-sm">{employeeUnique}</p>
                        </div>
                    </div>
                </div>
            </div>)
    };

    return (
        <div className="min-h-screen">
            <p className="text-center text-white text-4xl font-semibold py-4">Meet Our Team!</p>
            <div className="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 select-none">

                {
                    Employees.map((Employee) => {
                        return renderCard(Employee)
                    })
                }

            </div>
        </div>
    )
}

export default Card;