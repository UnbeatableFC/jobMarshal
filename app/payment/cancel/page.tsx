import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XIcon } from "lucide-react";
import Link from "next/link";

export default function PaymentCancelled() {
  return (
    <div className="w-full min-h-screen flex flex-1 justify-center items-center">
      <Card className="w-[350px] ">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <XIcon className="size-12 p-2 bg-red-500/30 text-red-500 rounded-full" />
          </div>
          <div className="mt-3 text-center sm:mt-5 w-full">
            <h2 className="text-xl font-semibold">
              Payment Cancelled
            </h2>
            <p className="text-sm mt-2 tracking-tight text-muted-foreground text-balance">
             No worries, you won&apos;t be charged. Please try again!
            </p>
            <Button asChild className="w-full mt-5">
              <Link href={"/"}>Go back to homepage</Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
