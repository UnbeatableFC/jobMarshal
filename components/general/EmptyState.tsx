import { Ban } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col flex-1 h-full items-center justify-center">
      <Ban className="size-10 text-primary" />
      <h2>No Job Post</h2>
    </div>
  );
}
