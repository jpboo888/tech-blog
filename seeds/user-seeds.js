const { User } = require('../models');

const userData = [
    {
        username: 'Japes1',
        password: 'alright'
    },
    {
        username: 'Japes2',
        password: 'alright1'
    },
    {
        username: 'Japes3',
        password: 'alrightalright'
    }
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;