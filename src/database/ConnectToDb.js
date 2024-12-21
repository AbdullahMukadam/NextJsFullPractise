import mongoose from "mongoose";

const ConnecToDb = async () => {
    try {
        const Connect = await mongoose.connect(process.env.MONGO_URI)
        if (Connect) {
            console.log("connected Succesfully")
        }
    } catch (error) {
        console.log(error, "Error in connecting TO Db")
    }
}

export default ConnecToDb
