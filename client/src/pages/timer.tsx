import { useState, useEffect, useRef } from "react";
import generateShuffle from "../../listOfScrambles";

const Timer: React.FC = () => {
  //Stopwatch logic
  const [scramble,setScramble]= useState<String>("");
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [previousTime, setPreviousTime] = useState<number>(0);

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
    setScramble(generateShuffle);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 32) {
        if (running) {
          setRunning(false);
          setPreviousTime(time);
        } else {
          setRunning(true);
          setPreviousTime(0);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    //TODO : fix evenlistener issue to stop timer on space click
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className=" text-gray-600 font-mono">
      <div className="container mx-auto flex  items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          {running ? (
            <>
              <div className="pt-32 pb-32">
                <p className="  text-black  font-extrabold">
                  <span className="text-9xl">
                    {Math.floor((time / 1000) % 60)}
                  </span>
                  <span className="text-5xl">
                    :{("0" + ((time / 10) % 100)).slice(-2)}
                  </span>
                </p>
              </div>
            </>
          ) : (
            <>
              <h1 className="cursor-pointer text-4xl font-semibold font-mono text-black">
                {scramble}
              </h1>
              <div className="p-16 m-4">
                <p className="  text-black  font-extrabold">
                  <span className="text-9xl">
                    {Math.floor((time / 1000) % 60)}
                  </span>
                  <span className="text-5xl">
                    :{("0" + ((time / 10) % 100)).slice(-2)}
                  </span>
                </p>
              </div>

              <h1
                onClick={() => setRunning(true)}
                className="cursor-pointer text-3xl font-medium font-mono text-black"
              >
                Click here or press space key to start timer
              </h1>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Timer;
