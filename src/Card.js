import Employees from './db/employees.json'
// manager = employees[0]
//if obj has github obj = engieer add role engineer
//else if obj has school obj = intern (add role intern)


function Card() {

    function renderCard(Employee) {
        const employeeID = Employee.id;
        const enployeeName = Employee.name;
        const employeeEmail = Employee.email;
        // const employeeGit = Employees[0].gitHub;
        // const employeeSchool = Employees[0].school;
        // const employeeOfficeNumber = Employees[0].officeNumber;
        const employeeRole = (() => {
            if (Employee.hasOwnProperty("gitHub")) {
                return "Engineer"
            } else if (Employee.hasOwnProperty("officeNumber")) {
                return "Manager"
            } else if (Employee.hasOwnProperty("school")) {
                return "Intern"
            }
        })();
        //     const employeeGitHub = `https://gitub.com/${Employee.github}`;
        //     const employeeSchool = `https://${Employee.school}.edu`;
        return (
            <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
                {/* <img class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="https://laravelnews.imgix.net/images/tailwindcss.png?ixlib=php-3.3.1" /> */}
                <div class="p-4">
                    <span class="text-blue-600 font-normal text-5xl">{employeeRole}</span>
                    <p class="font-semibold text-xl py-2">{enployeeName}</p>
                    <p class="font-semibold text-red-500 text-justify line-clamp-3">#{employeeID}</p>
                    <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
                        <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />

                        
                        <div class="flex flex-col space-y-0">
                            <p class="font-semibold text-base">{employeeEmail}</p>
                            <p class="font-light text-sm">placeholder</p>
                        </div>
                    </div>
                </div>
            </div>)
    };

    return (
        <div class="min-h-screen">
            <p class="text-center text-white text-4xl font-semibold py-4">Meet Our Team!</p>
            <div class="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 select-none">

                {
                    Employees.map((Employee) => {
                        return renderCard(Employee)
                    })
                }

                <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
                    <img class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="https://laravelnews.imgix.net/images/tailwindcss.png?ixlib=php-3.3.1" />
                    <div class="p-4">
                        <span class="text-blue-600 font-normal text-base">News</span>
                        <p class="font-semibold text-xl py-2">Tailwind Card Blog</p>
                        <p class="font-light text-gray-100 text-justify line-clamp-3">The longest word in any of the major English language dictionaries, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
                        <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
                            <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
                            <div class="flex flex-col space-y-0">
                                <p class="font-semibold text-base">@djpfs (Github)</p>
                                <p class="font-light text-sm">20 de Dezembro de 2021</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card;