import { prisma } from "@/app/utils/db";
import { Card } from "../ui/card";
import { EmptyState } from "./EmptyState";
import { JobCard } from "./JobCard";

async function getData() {
  const data = await prisma.jobPost.findMany({
    where: {
      status: "ACTIVE",
    },
    select: {
      jobTitle: true,
      id: true,
      salaryFrom: true,
      salaryTo: true,
      employmentType: true,
      location: true,
      createdAt: true,
      Company: {
        select: {
          name: true,
          logo: true,
          location: true,
          about: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export async function JobListings() {
  const data = await getData();
  return (
    <Card className="col-span-2 px-2">
      <>
        {data.length > 0 ? (
          <div className="flex flex-col gap-6">
            {data.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </>
    </Card>
  );
}
