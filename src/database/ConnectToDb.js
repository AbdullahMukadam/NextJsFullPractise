import mongoose from "mongoose";

const ConnecToDb = async () => {
    try {
        const Connect = await mongoose.connect(")
        if (Connect) {
            console.log("connected Succesfully")
        }
    } catch (error) {
        console.log(error, "Error in connecting tO Db")
    }
}

export default ConnecToDb
