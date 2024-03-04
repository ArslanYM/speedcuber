import React, { useState } from "react";

//auth
import { useSession } from "next-auth/react";
import RegisterForm from "@/components/custom/RegisterForm";
import LoggedIn from "../components/custom/LoggedIn";




export default function Register() {
  const { data: session } = useSession();
  return (
    <section className="font-mono">
      <div className="container mx-auto flex  items-center justify-center flex-col">
        {session?.user ? <LoggedIn /> : <RegisterForm />}
      </div>
    </section>
  );
}

