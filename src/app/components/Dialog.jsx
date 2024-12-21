import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DialogComponent({ DialogOpen, setDialogOpen, handleSubmit, register, Handlesubmit, loading }) {


    const submit = async (data) => {
        try {
            await Handlesubmit(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (

        <Dialog open={DialogOpen} onOpenChange={setDialogOpen}>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(submit)}>
                    <DialogHeader>
                        <DialogTitle>Add Blog</DialogTitle>
                        <DialogDescription>
                            Add New Blogs Here.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="tittle" className="text-right">
                                Tittle
                            </Label>
                            <Input
                                id="tittle"
                                className="col-span-3"
                                {...register("tittle", {
                                    required: true
                                })}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                id="description"
                                className="col-span-3"
                                {...register("description", {
                                    required: true
                                })}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">
                            {loading ? "Saving..." : "Save Changes"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>

    )
}
