import React from "react";
import CarouselComponent from "@/components/custom/Carousel";
import { Separator } from "@/components/ui/separator";
import AlgorithmCard from "@/components/custom/AlgorithmCard";
import listOfAlgorithms from "../../listOfAlgorithms";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Guide() {
  return (
    <section className=" text font-mono">
      <div className="container mx-auto flex  items-center justify-center flex-col">
        <h1 className="font-bold text-3xl">Tutorials to get started</h1>
        <div className="p-4">
          <CarouselComponent />
        </div>
        <div className="w-1/2">
          <Separator className="my-2" />
        </div>
        <div className="p-4">
          <h1 className="font-bold text-3xl"> Speedcubing Algorithms</h1>
        </div>

        <Carousel  opts={{
          align: "start",
        }}
        className="w-full max-w-sm">
          <CarouselContent>
            {listOfAlgorithms.map((algo, i) => {
              return (
                <div className="p-1 ">
                  <AlgorithmCard
                    title={algo.title}
                    description={algo.description}
                    image={algo.image}
                  />
                </div>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
