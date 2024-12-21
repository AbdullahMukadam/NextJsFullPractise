import mongoose from "mongoose";

const ConnecToDb = async () => {
    try {
        const Connect = await mongoose.connect("mongodb+srv://abdullahmukadam21:zlizkGDggSZbQSEb@cluster0.ayk9e.mongodb.net/")
        if (Connect) {
            console.log("connected Succesfully")
        }
    } catch (error) {
        console.log(error, "Error in connecting tO Db")
    }
}

export default ConnecToDb