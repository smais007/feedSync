import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./header-menu";
import { Button } from "./ui/button";

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-10 w-full transition-all">
      <div className="w-full max-w-screen-xl mx-auto px-2 lg:px-20 relative  border-b">
        <div className="flex h-14 items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" width={130} height={100} alt="Logo"></Image>
          </Link>
          <div>
            <SignedOut>
              <SignInButton>
                <Button variant={"link"}>
                  Sign in <span>&rarr;</span>
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button className="ml-2">Sign up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <div className="">
                <HeaderMenu />
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
