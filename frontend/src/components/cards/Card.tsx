import axios from "axios";
import React, { useEffect, useState } from "react";

const Card: React.FC = () =>  {

  const [isLoading, setLoading] = useState(true);
  const [employees, setEmployees] = useState();

  const baseurl = "http://localhost:";

  useEffect(() => {
      axios.get(`${baseurl}5000`).then((response) => {
          setEmployees(response.data);
          setLoading(false);
          console.log(employees);
      });
  }, []);

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
  }

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
          <div>{employees}</div>
      </div>
  );
}
export default Card;