const express = require('express');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

const dbLoc = './db/employees.json';

const router = express.Router();

router.get('/employees', (req, res) => {
    readFromFile(dbLoc).then((data) => res.json(JSON.parse(data)));
});

router.post('/employees', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, dbLoc);
        res.json('Tip added successfully');
    } else {
        res.errored('Error adding tip');
    }
});

// router.delete('/employees/:employeeID', (req, res) => {
//     const { employeeID } = req.params;

//     readFromFile(dbLoc).then((rawData) => {
//         let data = JSON.parse(rawData);
//         let index = 0;
//         for (; index < data.length; index++) {
//             const element = data[index];
//             console.log(element);
//             if (element.id == employeeID) {
//                 break;
//             }
//         }
//         data.splice(index, 1)
//         writeToFile(dbLoc, data);
//         res.json(`Note ${employeeID} deleted`);
//     })
// });

module.exports = router;