import mongoose from "mongoose";

const ConnecToDb = async () => {
    try {
<<<<<<< HEAD
        const Connect = await mongoose.connect(process.env.MONGO_URI)
=======
        const Connect = await mongoose.connect(")
>>>>>>> 8ece82cacd9e27dc8b89866cc605ab4ecf11c369
        if (Connect) {
            console.log("connected Succesfully")
        }
    } catch (error) {
        console.log(error, "Error in connecting TO Db")
    }
}

export default ConnecToDb
