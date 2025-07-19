import { JobFilters } from "@/components/general/JobFilters";
import { JobListings } from "@/components/general/JobListings";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <JobFilters />

      <JobListings />
    </div>
  );
}
