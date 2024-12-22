import { NextResponse } from "next/server";
import Blog from "@/models/blog";
import ConnecToDb from "@/database/ConnectToDb";

export async function PATCH(req) {
    try {
        await ConnecToDb();
        
        const data = await req.json();
        const { id, tittle, description } = data;

        if (!id) {
            return NextResponse.json({
                success: false,
                message: "Blog ID is required"
            }, { status: 400 });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { tittle, description },
            { new: true }  
        );

        if (!updatedBlog) {
            return NextResponse.json({
                success: false,
                message: "Blog not found"
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            message: "Blog updated successfully",
            blog: updatedBlog
        });

    } catch (error) {
        console.error("Error updating blog:", error);
        return NextResponse.json({
            success: false,
            message: 'Error in updating blog',
            error: error.message
        }, { status: 500 });
    }
}