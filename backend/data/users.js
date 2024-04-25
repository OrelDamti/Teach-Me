import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name: 'Ilan Vinerski',
        email: 'ilan@example.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'Orel Damti',
        email: 'orel@example.com',
        password: bcrypt.hashSync('123456',10),
    }
]

export default users