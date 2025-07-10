import Link from "next/link";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { ThemeToggle } from "../themes/ThemeToggle";
import { auth } from "@/app/utils/auth";
import { UserDropdown } from "./UserDropdown";

export const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="flex items-center justify-between py-5">
      <Link href={"/"} className="flex items-center gap-2">
        <Image src={Logo} alt="Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">
          Job<span className="text-primary">Marshall</span>
        </h1>
      </Link>

      {/* Desktop NavBar */}

      <div className="hidden md:flex items-center gap-5">
        <ThemeToggle />
        <Button asChild size={"lg"}>
          <Link href={"/post-job"}>Post Job</Link>
        </Button>

        {session?.user ? (
          <UserDropdown
            email={session.user.email!}
            name={session.user.name!}
            image={session.user.image!}
          />
        ) : (
          <>
            <Button variant={"outline"} size={"lg"} asChild>
              <Link href={"/login"}>Login</Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};
