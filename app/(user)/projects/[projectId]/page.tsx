import Table from "@/components/table";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { projects as dbProjects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
const page = async ({
  params,
}: {
  params: {
    projectId: string;
  };
}) => {
  if (!params.projectId) return <div>Invalid Project Id</div>;

  const projects = await db.query.projects.findMany({
    where: eq(dbProjects.id, parseInt(params.projectId)),
    with: {
      feedbacks: true,
    },
  });

  const project = projects[0];

  return (
    <div>
      <div>
        <Link
          href="/dashboard"
          className="flex items-center text-indigo-700 mb-5 w-fit"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span className="text-lg">Back to projects</span>
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-3">{project.name}</h1>
          <h2 className="text-muted-foreground mb-2 ">{project.description}</h2>
        </div>
        <div>
          {project.url ? (
            <>
              <Link href={project.url}>
                <Button variant={"link"}>Visit Site</Button>
              </Link>
              <Link href={`/projects/${params.projectId}/instructions`}>
                Embed Code
              </Link>
            </>
          ) : null}
        </div>
      </div>
      <div>
        <Table data={project.feedbacks}></Table>
      </div>
    </div>
  );
};

export default page;
