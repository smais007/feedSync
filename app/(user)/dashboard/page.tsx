import { getSubscription } from "@/actions/userSubscriptions";
import NewProjectButton from "@/components/new-project";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { maxFreeProjects } from "@/lib/payments";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import ProjectsList from "./projects-list";

export default async function Page() {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  const userProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.userId, userId));

  const subscribed = await getSubscription({ userId });

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-3xl font-bold text-center my-4">Your Projects</h1>
        {subscribed !== true && userProjects.length > maxFreeProjects ? null : (
          <NewProjectButton />
        )}
      </div>
      <ProjectsList projects={userProjects} subscribed={subscribed} />
    </div>
  );
}
