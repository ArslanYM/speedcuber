import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Timer: React.FC = () => {
//TODO: create proper timer which works like monkeytype
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);

  return (
    <section className=" text-gray-600 font-mono">
      <div className="container mx-auto flex  items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          {!running ? (
            <h1 className="text-3xl font-semibold font-mono text-black">
              Press spacebar to start the timer
            </h1>
          ) : (
            <div className="pt-2">
              <p className="text-5xl  text-black  font-extrabold">
                {/* {timer} */ }
              </p>

              <Button variant={"ghost"} >
                Stop
              </Button>
            </div>
          )}
        </div>

        <img
          className="lg:w-96 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="logo.svg"
        />
        <p>Wohoo! Pretty Fast</p>
      </div>
    </section>
  );
};

export default Timer;

