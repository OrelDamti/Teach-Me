import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useUnifiedTopology: true
        })
        console.log(`MongoDb Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error MongoDB: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB