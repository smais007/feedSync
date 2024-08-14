import { getSubscription } from "@/actions/userSubscriptions";
import NewProjectButton from "@/components/new-project";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { maxFreeProjects } from "@/lib/payments";
import { auth, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import ProjectList from "./projects-list";

export default async function DashboardPage() {
  const userProject = await db.select().from(projects);

  const { userId } = auth();
  if (!userId) {
    return null;
  }
  const user = await currentUser();
  const userProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.userId, userId));

  const subscribed = await getSubscription({ userId });
  return (
    <div>
      <div>
        {subscribed !== true && userProjects.length > maxFreeProjects ? null : (
          <NewProjectButton />
        )}
        <h1 className="text-2xl text-center font-semibold my-4">
          Your Projects
        </h1>
        <div>{!subscribed ? <ProjectList projects={userProject} /> : null}</div>
      </div>
    </div>
  );
}
