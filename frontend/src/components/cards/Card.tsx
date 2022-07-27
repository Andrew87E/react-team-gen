import axios from "axios";
import React, { useEffect, useState } from "react";

const Card: React.FC = () =>  {
  const [Employees, setEmployees] = useState([]);
  

  const grabEmployees = async () => {
    const res = await axios.get("http://localhost:5000/api/employees");
    return res.data;
  };

  useEffect(() => {
    const getAllEmployees = async () => {
      const allEmployees = await grabEmployees();
      if (Employees) {
        setEmployees(allEmployees)
        return;
      }
    };
    // getAllEmployees() pulls from db constantly 
  }, [Employees]);

  
  console.log(Employees)

    function renderCard() {
      const employeeID = Employees.id;
      const enployeeName = Employees.name;
      const employeeEmail = Employees.email;

      const employeeUnique = (() => {
        if (Employees.hasOwnProperty("gitHub")) {
          return `https://github.com/${Employees.gitHub}`;
        } else if (Employees.hasOwnProperty("officeNumber")) {
          return `Office: ${Employees.officeNumber}`;
        } else if (Employees.hasOwnProperty("school")) {
          return `Currently enrolled at: ${Employees.school}`;
        }
      })();

      const employeeRole = (() => {
        if (Employees.hasOwnProperty("gitHub")) {
          return "Engineer";
        } else if (Employees.hasOwnProperty("officeNumber")) {
          return "Manager";
        } else if (Employees.hasOwnProperty("school")) {
          return "Intern";
        }
      })();
      return (
        <div
          key={res.data.id}
          className="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50"
        >
          <div className="p-4">
            <span className="text-blue-600 font-normal text-5xl">
              {employeeRole}
            </span>
            <p className="font-semibold text-xl py-2">{enployeeName}</p>
            <p className="font-semibold text-red-500 text-justify line-clamp-3">
              #{employeeID}
            </p>
            <div className="flex flex-wrap mt-10 space-x-4 align-bottom">
              <img
                className="w-10 h-10 rounded-full"
                alt="Stuffs!"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU"
              />

              <div className="flex flex-col space-y-0">
                <p className="font-semibold text-base">{employeeEmail}</p>
                <p className="font-light text-sm">{employeeUnique}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

  

  return (
    <div className="min-h-screen">
      <p className="text-center text-black text-4xl font-semibold py-4">
        Meet Our Team!
      </p>
      <div className="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 select-none">
        {Employees.map((Employee) => {
          return renderCard(Employee); 
         })}
      </div>
    </div>
  );
}

export default Card;