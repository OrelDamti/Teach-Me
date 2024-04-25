import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    studentId:{
        type : String,
        required: true,
        unique: true,
    },
    studentDepartment:{
        type : String,
        required: true
    },
    phone:{
        type : String,
        required: true
    }
}, {
    timestamps : true
})

/*studentSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

studentSchema.pre('save',async function (next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})*/

const Student = mongoose.model('Student',studentSchema)

export default Student;