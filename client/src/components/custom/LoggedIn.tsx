import Link from "next/link";
import { Button } from "../ui/button";

export default function LoggedIn() {
    return (
      <section className=" text-gray-600 body-font">
        <div className="container mx-auto flex  items-center justify-center flex-col">
          <img
            className="lg:w-96 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="logo.svg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="text-3xl font-semibold font-mono text-black">
              begin your cubing journey now.
            </h1>
            <Link href={"/guide"}>
              <Button
                variant="link"
                className=" text-xl animate-bounce  text-black font-mono"
              >
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  