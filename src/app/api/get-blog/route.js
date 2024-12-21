import ConnecToDb from "@/database/ConnectToDb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";



export async function GET(req) {
    try {
        await ConnecToDb();

        const AllBlogs = await Blog.find({});
        if (!AllBlogs) {
            return NextResponse.json({
                success: false,
                meassage: "Error In Getting Blogs"
            })
        }

        return NextResponse.json({
            success: true,
            message: "All Blogs Fetch Successfully",
            blogs: AllBlogs
        })

    } catch (error) {
        return NextResponse.json({
            success: false,
            meassage: "Something Went WRong"
        })
    }
}