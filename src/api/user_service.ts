// @ts-ignore
import UserDto from '../modal/user_dto';
// @ts-ignore
const express = require('express');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

dotenv.config();

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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

    console.log({token: req.headers.authorization});

    if (req.headers.authorization === '123456') {
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