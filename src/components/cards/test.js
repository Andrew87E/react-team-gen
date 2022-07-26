const axios = require('axios');

(async () => {
    const response = await axios.get("http://localhost:3001/api/employees")
    const employeeResponse = JSON.stringify(response.data, null, 2)
    console.log(employeeResponse)
}
)()