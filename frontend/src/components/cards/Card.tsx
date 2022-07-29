import axios from "axios";
import React, { useEffect, useState } from "react";

const Card: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('/api/employees').then((response) => {
      setEmployees(response.data);
      setLoading(false);
    });
  }, []);

  function renderCard(employees: any) {
    const employeeUnique = (() => {
      if (employees.hasOwnProperty("gitHub")) {
        return `https://github.com/${employees.gitHub}`;
      } else if (employees.hasOwnProperty("officeNumber")) {
        return `Office: ${employees.officeNumber}`;
      } else if (employees.hasOwnProperty("school")) {
        return `Currently enrolled at: ${employees.school}`;
      }
    })();

    const employeeRole = (() => {
      if (employees.hasOwnProperty("gitHub")) {
        return "Engineer";
      } else if (employees.hasOwnProperty("officeNumber")) {
        return "Manager";
      } else if (employees.hasOwnProperty("school")) {
        return "Intern";
      }
    })();

    return (
      <div
        key={(() =>
          Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1))()}
        className="w-100 cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-black-400"
      >
        <div className="p-4">
          <span className="text-blue-600 font-normal text-5xl">
            {employeeRole}
          </span>
          <p className="font-semibold text-xl py-2">{employees.name}</p>
          <p className="font-semibold text-red-500 text-justify line-clamp-3">
            #{employees.id}
          </p>
          <div className="flex flex-wrap mt-10 space-x-4 align-bottom">
            <img
              className="w-10 h-10 rounded-full"
              alt="stuffs"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU"
            />

            <div className="flex flex-col space-y-0">
              <p className="font-semibold text-base">{employees.email}</p>
              <p className="font-light text-sm">{employeeUnique}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "grey",
        }}
      >
        Loading...
      </div>
    );
  } else {
    return (
      <div className="min-h-screen">
        <p className="text-center text-white text-4xl font-semibold py-4">
          Meet Our Team!
        </p>
        <div className="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 select-none">
          {employees.map((Employee) => {
            return renderCard(Employee);
          })}
        </div>
      </div>
    );
  }
};

export default Card;
