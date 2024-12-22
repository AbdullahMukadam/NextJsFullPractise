"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import useFetchBlogs from './UseFetchBlogs'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { AlertDestructive } from './Alert'

export default function GetBlogs() {
    const { blogs, loading, error, fetchBlogs } = useFetchBlogs();
    const router = useRouter()
    const [alert, setAlert] = useState(null)
    const [deletingIds, setDeletingIds] = useState(new Set()) 

    React.useEffect(() => {
        fetchBlogs();
    }, []); 

    const handleEdit = () => {
        // TODO: Implement edit functionality
    }

    const handleDelete = async (id) => {
        setDeletingIds(prev => new Set(prev).add(id)) 
        try {
            const res = await axios.delete("http://localhost:3000/api/delete-blog", {
                data: { id }
            })
            if (res.data.success) {
                await fetchBlogs()
                setAlert({
                    title: "Success",
                    description: "Blog post deleted successfully.",
                    variant: "default"
                })
               
                setTimeout(() => setAlert(null), 3000)
            } else {
                setAlert({
                    title: "Error",
                    description: res.data.message || "Failed to delete blog post. Please try again.",
                    variant: "destructive"
                })
                setTimeout(() => setAlert(null), 3000)
            }
        } catch (error) {
            console.error("Error deleting blog:", error)
            setAlert({
                title: "Error",
                description: error.response?.data?.message || error.message || "An unexpected error occurred.",
                variant: "destructive"
            })
        } finally {
            setDeletingIds(prev => {
                const newSet = new Set(prev)
                newSet.delete(id)
                return newSet
            })
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-center">Latest Blogs</h1>
                <Button
                    variant="outline"
                    onClick={fetchBlogs}
                    className="flex items-center gap-2"
                >
                    Refresh
                </Button>
            </div>
            {alert && <AlertDestructive {...alert} />}

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
                                    {blog.tittle || "Sample Title"}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="line-clamp-3">
                                    {blog.description || "Sample Description"}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="flex justify-end gap-2 mt-auto">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex items-center gap-2"
                                    onClick={handleEdit}
                                >
                                    <Pencil className="h-4 w-4" /> Edit
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    className="flex items-center gap-2"
                                    onClick={() => handleDelete(blog._id)}
                                    disabled={deletingIds.has(blog._id)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                    {deletingIds.has(blog._id) ? "Deleting..." : "Delete"}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}