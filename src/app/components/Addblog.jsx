"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import DialogComponent from './Dialog'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import useFetchBlogs from './UseFetchBlogs'


export default function Addblog() {
    const [DialogOpen, setDialogOpen] = useState(false)
    const [loading, setIsloading] = useState(false)
    const { handleSubmit, register } = useForm()
    const { fetchBlogs, blogs, setBlogs } = useFetchBlogs();

    const Handlesubmit = async (data) => {
        setIsloading(true)
        try {
            const res = await axios.post("http://localhost:3000/api/add-blog", {
                tittle: data.tittle,
                description: data.description
            })
            if (res.data.success) {
                console.log(res.data)
                
                await fetchBlogs()
                setIsloading(false)
                setDialogOpen(false)
            }
        } catch (error) {
            console.log(error, "error in submitting the form")
            setIsloading(false)
            setDialogOpen(false)
        }
    }
    return (
        <div className='w-full h-full p-2'>
            <Button onClick={() => setDialogOpen(true)} >Add New Blog</Button>
            <DialogComponent
                DialogOpen={DialogOpen}
                setDialogOpen={setDialogOpen}
                handleSubmit={handleSubmit}
                register={register}
                Handlesubmit={Handlesubmit}
                loading={loading}
            />
        </div>
    )
}

