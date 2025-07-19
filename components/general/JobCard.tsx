import Link from "next/link";
import { Card, CardHeader } from "../ui/card";
import Image from "next/image";
import { formatRelativeTime } from "@/app/utils/formatRelativeTime";

interface Props {
  job: {
    id: string;
    createdAt: Date;
    Company: {
      about: string;
      name: string;
      location: string;
      logo: string;
    };
    jobTitle: string;
    employmentType: string;
    location: string;
    salaryFrom: number;
    salaryTo: number;
  };
}

export function JobCard({ job }: Props) {
  return (
    <Link href={`/job`}>
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4">
            <Image
              src={job.Company.logo}
              alt={job.Company.name}
              width={48}
              height={48}
            />

            <div>
              {job.jobTitle}
              {formatRelativeTime(job.createdAt)}
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
