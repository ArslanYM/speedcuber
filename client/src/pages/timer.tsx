import { useState, useEffect, useRef } from "react";
import generateShuffle from "../../scrambleGenerator";
import { Button } from "@/components/ui/button";

const Timer: React.FC = () => {
  const [scramble, setScramble] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  let interval: NodeJS.Timeout;

  useEffect(() => {
    setScramble(generateShuffle());
  }, []);

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    const handleKeyDown =  (event: KeyboardEvent) => {
      if (event.code === "Space") {
        if (running) {
          setRunning(false);
          setShowResult(true);
        } else {
          setRunning(true);
          setShowResult(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [running]);

  const handleReset = () => {
    setTime(0);
    setRunning(false);
    setShowResult(false);
    setScramble(generateShuffle());
  };

  return (
    <section className="text-gray-600 font-mono">
      <div className="container mx-auto flex items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          {showResult ? (
            <div className="m-36  font-extrabold">
              <h1 className="text-black">
                <span className="text-9xl">
                  {Math.floor((time / 1000) % 60)}
                </span>
                <span className="text-5xl">
                  .{("0" + ((time / 10) % 100)).slice(-2)}
                </span>
                <span className="text-4xl">s</span>
              </h1>
              <Button variant={"ghost"} onClick={handleReset} className="mt-4 ">
                Reset
              </Button>
            </div>
          ) : running ? (
            <div className="pt-32 pb-32">
              <p className="text-black font-extrabold">
                <span className="text-9xl">
                  {Math.floor((time / 1000) % 60)}
                </span>
                <span className="text-5xl">
                  :{("0" + ((time / 10) % 100)).slice(-2)}
                </span>
              </p>
            </div>
          ) : (
            <div className="m-2">
              <h1 className="text-4xl font-semibold font-mono text-black">
                {scramble}
              </h1>
              <div className="p-12 m-6">
                <p className="text-black font-extrabold">
                  <span className="text-9xl">0</span>
                  <span className="text-5xl">:00</span>
                </p>
              </div>
              <h1
                onClick={() => {
                  setRunning(true);
                }}
                className="animate-bounce cursor-pointer text-3xl font-medium font-mono text-black"
              >
                Click here or press space key to start timer
              </h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Timer;
