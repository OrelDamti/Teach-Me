import bcrypt from 'bcryptjs'

const students = [
    {
        name: 'Ilan Vinerski',
        email: 'ilan@example.com',
        password: bcrypt.hashSync('123456',10),
        studentId: '308571785',
        studentDepartment: 'Software',
        phone: '0542040041',
    },
    {
        name: 'Orel Damti',
        email: 'orel@example.com',
        password: bcrypt.hashSync('123456',10),
        studentId: '315838375',
        studentDepartment: 'Software',
        phone: '0526560990',
    }
]

export default students