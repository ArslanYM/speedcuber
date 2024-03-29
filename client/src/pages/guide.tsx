import React from "react";
import CarouselComponent from "@/components/custom/Carousel";
import { Separator } from "@/components/ui/separator";
import AlgorithmCard from "@/components/custom/AlgorithmCard";
import listOfAlgorithms from "../../listOfAlgorithms";

export default function Guide() {
  return (
    <section className=" text font-mono">
      <div className="container mx-auto flex  items-center justify-center flex-col">
        {/* tutorials section */}
        <h1 className="p-4 font-bold text-3xl">Tutorials to get started</h1>

        <CarouselComponent />

        <Separator className="my-4" />
        {/* speedcubing  section  */}
        <h1 className=" p-4 font-bold text-3xl"> Speedcubing Algorithms</h1>
        <div className="container mx-auto flex  items-center justify-center flex-row">
          {listOfAlgorithms.map((algo, i) => {
            return (
              <div className="p-1 ">
                <AlgorithmCard
                  title={algo.title}
                  description={algo.description}
                  image={algo.image}
                  downloadLink={algo.downloadLink}
                />
              </div>
            );
          })}
        </div>
        <Separator className="my-2" />
        {/* {add more sections for advanced folks} */}
      </div>
    </section>
  );
}
