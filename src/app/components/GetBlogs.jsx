"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import useFetchBlogs from './UseFetchBlogs'

export default function GetBlogs() {

    const { blogs, loading, error, fetchBlogs } = useFetchBlogs();


    React.useEffect(() => {
        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Latest Blogs</h1>

            {blogs.length === 0 ? (
                <div className="text-center text-gray-500">
                    No blogs found. Be the first to create one!
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <Card key={blog._id} className="hover:shadow-lg transition-shadow flex flex-col">
                            <CardHeader>
                                <CardTitle className="line-clamp-2">
                                    {blog.tittle ? blog.tittle : "Sample Tittle"}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="line-clamp-3">
                                    {blog.description ? blog.description : "Sample Description"}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="flex justify-end gap-2 mt-auto">
                                <Button variant="outline" size="sm" className="flex items-center gap-2">
                                    <Pencil className="h-4 w-4" /> Edit
                                </Button>
                                <Button variant="destructive" size="sm" className="flex items-center gap-2">
                                    <Trash2 className="h-4 w-4" /> Delete
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}