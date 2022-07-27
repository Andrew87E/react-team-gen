import axios from "axios";

const API_URL = `/api/employee`;

// import empoyees.json from API_URL to get the data
const getEmployees = async () => {
  const response = await axios.get("http://localhost:3001/api/employees");
  const employeeResponse = JSON.stringify(response.data, null, 2);
  console.log(employeeResponse);
  return employeeResponse;
};

// use axios to post the data to API_URL
const createEmployee = async (employee) => {
  const response = await axios.post(API_URL, employee);
  return response.data;
};

// use axios to put the data to API_URL
const updateEmployee = async (employee) => {
  const response = await axios.put(`${API_URL}/${employee.id}`, employee);
  return response.data;
};

// use axios to delete the data to API_URL
const deleteEmployee = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export { getEmployees, createEmployee, updateEmployee, deleteEmployee };
