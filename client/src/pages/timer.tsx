import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

const Timer: React.FC = () => {
  //Stopwatch logic
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [prevTime, setPrevTime] = useState<number>(0);

  let interval: NodeJS.Timeout;
  //starts timer
  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  //Detect space key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 32) {
        if (running) {
          setRunning(false);
          setPrevTime(time);
          setTime(0);
        } else {
          setRunning(true);
          setPrevTime(0);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener when component unmounts
    //TODO : fix evenlistener issue to stop timer on space click
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  // [running, time]

  return (
    <section className=" text-gray-600 font-mono">
      <div className="container mx-auto flex  items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          {running ? (
            <div className="pt-2">
              <p className="text-5xl  text-black  font-extrabold">
                <span>
                  {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
              </p>
              <Button
                variant={"ghost"}
                onClick={() => {
                  setRunning(false);
                  setPrevTime(time);
                  //TODO: toast not working
                  toast(`Your speed was ${prevTime} minutes`);
                  setTime(0);
                }}
              >
                Stop
              </Button>
            </div>
          ) : (
            <h1
              onClick={() => {
                setRunning(true);
              }}
              className="cursor-pointer text-3xl font-semibold font-mono text-black"
            >
              Click here or press space key to start.
            </h1>
          )}
        </div>

        <img
          className="lg:w-96 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="logo.svg"
        />
        {!prevTime ? (
          <>
            <p className="text-2xl">Test your cubing skills!</p>
          </>
        ) : (
          <p className="text-2xl">
            Woah! You solved it in{" "}
            <span>
              {("0" + Math.floor((prevTime / 60000) % 60)).slice(-2)}:
            </span>
            <span>{("0" + Math.floor((prevTime / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((prevTime / 10) % 100)).slice(-2)}</span> minutes.
          </p>
        )}
      </div>
    </section>
  );
};

export default Timer;
