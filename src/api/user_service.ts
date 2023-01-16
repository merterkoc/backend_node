// @ts-ignore
import UserDto from '../modal/user_dto';
// @ts-ignore
const express = require('express');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const port = 3001;

let users : UserDto[] = [
    {
        id: 1,
        name: 'Kevin Smith',
        age: 30
    },
    {
        id: 2,
        name: 'Marry Smith',
        age: 25
    }
]
app.get('/user/:id', (req: any, res: any) => {

    console.log({token: req.headers['token']});
    if (req.headers['token'] === '123456') {
        const user = users.find(u => u.id === parseInt(req.params.id));
        if (!user) res.status(404).send('The user with the given ID was not found.');
        res.send(user);
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});