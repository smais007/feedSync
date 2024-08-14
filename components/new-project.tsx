import { createProject } from "@/actions/createProject";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CirclePlus } from "lucide-react";
import SubmitButton from "./submit-proj-btn";

const NewProjectButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <CirclePlus className="w-4 h-4 mr-1 "></CirclePlus>
          Create Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:mx-w-[425px]  sm:rounded-xl">
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
          <DialogDescription>
            Create New Project to Explor its magic
          </DialogDescription>
        </DialogHeader>
        <form className="flex gap-4 flex-col" action={createProject}>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              id="name"
              placeholder="Your project name"
            ></Input>
            <Label htmlFor="url">URL</Label>
            <Input
              name="url"
              id="url"
              placeholder="https://example.com"
            ></Input>
          </div>
          <Textarea
            name="description"
            id="description"
            placeholder="Description (Optional)"
          ></Textarea>
          <div>
            {/* <Button type="submit" className="w-full">
              Create Project
            </Button> */}
            <SubmitButton />
          </div>
        </form>
        {/* <DialogFooter>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectButton;
