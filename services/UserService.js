import axios from "axios";

const PORT = process.env.PORT || 3001;

const BASE_API_URL = `http://localhost:${PORT}/api/`;

const API_URL = `${BASE_API_URL}employees`;

const employeeApi = axios.create({
    baseURL: API_URL,
});

export const getEmployees = () => {
    
}

// export async function getAllEmployees() {
//     try {
//         const response = await axios.get("/api/employees");
//         console.log("response  ", response);
//         return response.data;
//     } catch (error) {
//         return [];
//     }
// }

// export async function createemployee(data) {
//     const response = await axios.post(`/api/employee`, { employee: data });
//     return response.data;
// }

