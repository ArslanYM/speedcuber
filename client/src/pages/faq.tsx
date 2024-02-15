import Accordian from "@/components/custom/Accordian";

export default function FAQ() {
  return (
    <>
      <section className=" text-gray-600 body-font">
        <div className="container mx-auto flex  items-center justify-center flex-col">
          <h1 className="text-3xl font-semibold font-mono text-black">
            Frequently asked questions
          </h1>
          <div className="container mx-auto flex  items-center justify-evenly flex-row">
            <div>
              <Accordian/>
            </div>
            <img
              className="lg:w-96 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="logo.svg"
            />
            <div>
              <Accordian />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// const  FAQ = {
//       {
//         "question": "How do I solve a Rubik's Cube?",
//         "answer": "There are various methods to solve a Rubik's Cube, including beginner's methods like the layer-by-layer method or more advanced methods like CFOP (Cross, F2L, OLL, PLL). Many tutorials, guides, and videos are available online to learn these methods."
//       },
//       {
//         "question": "What is the fastest time to solve a Rubik's Cube?",
//         "answer": "As of the latest available information, the fastest time to solve a Rubik's Cube by a human is around 3.47 seconds, achieved by Yusheng Du from China in November 2018."
//       },
//       {
//         "question": "How many combinations are possible on a Rubik's Cube?",
//         "answer": "A standard 3x3x3 Rubik's Cube has 43,252,003,274,489,856,000 possible combinations."
//       },
//       {
//         "question": "What is the world record for the most Rubik's Cubes solved simultaneously?",
//         "answer": "The world record for the most Rubik's Cubes solved simultaneously by an individual is 1,256, achieved by Que Jianyu of China in November 2018."
//       },
//       {
//         "question": "Are there any algorithms to solve a Rubik's Cube?",
//         "answer": "Yes, there are numerous algorithms used in various methods to solve a Rubik's Cube. These algorithms involve sequences of moves designed to achieve specific goals, such as solving a particular piece or orienting certain parts of the cube."
//       },
//       {
//         "question": "What is the history of the Rubik's Cube?",
//         "answer": "The Rubik's Cube was invented in 1974 by Hungarian architect Ernő Rubik. Originally called the \"Magic Cube,\" it gained popularity worldwide after being rebranded as the Rubik's Cube in the early 1980s."
//       },
//       {
//         "question": "Can the Rubik's Cube be used as a learning tool?",
//         "answer": "Yes, the Rubik's Cube can be used as a learning tool to improve various skills such as problem-solving, spatial reasoning, memory, and perseverance."
//       },
//       {
//         "question": "What are some common methods for solving the Rubik's Cube?",
//         "answer": "Some common methods for solving the Rubik's Cube include the layer-by-layer method, CFOP (Cross, F2L, OLL, PLL), Roux method, and Petrus method."
//       },
//       {
//         "question": "How can I improve my speed in solving the Rubik's Cube?",
//         "answer": "Improving speed in solving the Rubik's Cube requires practice, learning efficient algorithms, refining finger dexterity, and familiarizing oneself with advanced solving techniques."
//       },
//       {
//         "question": "Are there different types or sizes of Rubik's Cubes available?",
//         "answer": "Yes, there are various types and sizes of Rubik's Cubes available, including different NxNxN cubes (such as 2x2x2, 4x4x4, 5x5x5), shape modification puzzles, mirror cubes, and more."
//       }
//   }
  