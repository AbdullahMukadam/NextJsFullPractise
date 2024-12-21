"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import DialogComponent from './Dialog'
import { useForm } from 'react-hook-form'

export default function Addblog() {
    const [DialogOpen, setDialogOpen] = useState(false)
    const { handleSubmit, register } = useForm()

    const Handlesubmit = async (data) => {

        try {

        } catch (error) {
            console.log(error, "error in submitting the form")
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
            />
        </div>
    )
}

