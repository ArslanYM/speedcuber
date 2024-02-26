import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { signOut, useSession } from "next-auth/react";

export const Appbar: React.FC = () => {
  const { data: session } = useSession();
  return (
    <>
      <nav className="font-mono px-4 md:px-32 lg:px-52 py-4 md:py-6 lg:py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <img src="logo.svg" alt="Company Logo" className="w-10 h-auto mr-2" />
          <Link href={"/"}>
            <Button
              variant="link"
              className="font-md font-semibold font-mono text-xl"
            >
              Speed Cuber
            </Button>
          </Link>
        </div>
        <ul className="flex items-center">
          <li>
            <Link href={"/guide"}>
              <Button variant="link">Guide</Button>
            </Link>
          </li>
          <li>
            <Link href={"/timer"}>
              <Button variant="link">Timer</Button>
            </Link>
          </li>
          <li>
            {session?.user ? (
              <UserImage />
            ) : (
              <Link href="/register">
                <Button variant="link">Login/SignUp</Button>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

function UserImage() {
  const { data: session } = useSession();
  return (
    <>
      <div className="w-[10px]">
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src={session?.user?.image?? ''} alt="@user" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex justify-center ">
              <Button
                onClick={() => {
                  signOut();
                }}
                variant={"ghost"}
              >
                Log Out
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
