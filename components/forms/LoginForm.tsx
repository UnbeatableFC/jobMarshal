import { auth, signIn } from "@/app/utils/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import GitHub from "./icons/GitHub";
import Google from "./icons/Google";
import { GeneralSubmitButton } from "../general/SubmitButtons";
import { redirect } from "next/navigation";

export const LoginForm = async () => {
  const session = await auth();

  if (session?.user) {
    return redirect("/");
  }
  
  const GitHubSignIn = async () => {
    "use server";
    await signIn("github", {
      redirectTo: "/onboarding",
    });
  };
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome Back</CardTitle>
          <CardDescription>
            Login with your Google or GitHub aacount
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <form action={GitHubSignIn}>
              <GeneralSubmitButton
                text="Login with GitHub"
                width="w-full"
                variant={"outline"}
                icon={<GitHub />}
              />
            </form>
            <form>
              <GeneralSubmitButton
                text="Login with Google"
                width="w-full"
                variant={"outline"}
                icon={<Google />}
              />
            </form>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-xs text-muted-foreground text-balance">
        By clicking continue, you agree to our terms and service and
        privacy policy.
      </div>
    </div>
  );
};
