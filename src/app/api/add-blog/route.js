import ConnecToDb from "@/database/ConnectToDb";
import { NextResponse } from "next/server";


export default async function POST(req) {
    try {
        await ConnecToDb()
        const data = await req.json()
        if (!data) {
            return NextResponse.json({
                success: false,
                message: "Data Not Received"
            })
        }

        console.log(data)
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Something Went wrong"
        })
    }
}