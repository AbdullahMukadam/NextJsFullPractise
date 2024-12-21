import ConnecToDb from "@/database/ConnectToDb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        await ConnecToDb()
        const data = await req.json()
        if (!data) {
            return NextResponse.json({
                success: false,
                message: "Data Not Received"
            })
        }

        const newBlog = await new Blog({
            tittle: data.tittle,
            description: data.description
        })

        if(newBlog){
          await newBlog.save()

            return NextResponse.json({
                success: true,
                message:"New Blog Added Succesfully",
                data : newBlog
            })
        }

        
       
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Something Went wrong"
        })
    }
}