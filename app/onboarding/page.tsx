import { OnboardingForm } from "@/components/forms/onboarding/OnboardingForm";
import { prisma } from "../utils/db";
import { redirect } from "next/navigation";
import { requireUser } from "../utils/requireUser";

async function checkUserOnboardFinished(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      onboardingCompleted: true,
    },
  });

  if (user?.onboardingCompleted === true) {
    return redirect("/");
  }

  return user;
}

const OnboardingPage = async () => {
  const session = requireUser();

  await checkUserOnboardFinished((await session).id as string);

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center py-10">
      <OnboardingForm />
    </div>
  );
};

export default OnboardingPage;
