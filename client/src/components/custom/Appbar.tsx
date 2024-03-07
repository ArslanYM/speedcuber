import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { signOut, useSession } from "next-auth/react";

export const Appbar: React.FC = () => {

  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(()=>{
    if(localStorage.getItem('token')!=null){
      console.log(localStorage.getItem('token'));
      
      setIsLoggedIn(true)
    }
  },[])

  return (
    <>
      <nav className="font-mono px-4 md:px-32 lg:px-52 py-4 md:py-6 lg:py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <Link href={"/"}>
          <img src="logo.svg" alt="Company Logo" className="w-10 h-auto mr-2" />
          </Link>
          
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
            {session?.user || isLoggedIn  ? (
              <UserImage />
            ) : (
              <Link href="/register">
                <Button variant="link">SignUp</Button>
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
                  localStorage.setItem('token', '')
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
