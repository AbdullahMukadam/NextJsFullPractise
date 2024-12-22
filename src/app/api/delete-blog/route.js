import ConnecToDb from "@/database/ConnectToDb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";



export async function DELETE(req) {
    try {
        await ConnecToDb();
        const data = await req.json();
        const { id } = data

        if (!id) {
            return NextResponse.json({
                success: false,
                message: "ID not received"
            })
        }

        const DeleteBlog = await Blog.findByIdAndDelete(id)
        if (DeleteBlog) {
            return NextResponse.json({
                success: true,
                message: "Deleted Successfully"
            })
        }

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Error in Deleting Blog'
        })
    }
}