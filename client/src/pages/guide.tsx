import React from "react";
import CarouselComponent from "@/components/custom/Carousel";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


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
        <div className="container mx-auto flex  items-center justify-center flex-row ">
          <AlgorithmCard />
          <AlgorithmCard />
          <AlgorithmCard />
        </div>
      </div>
    </section>
  );
}

function AlgorithmCard() {
  return (
    <>
      <Card className="m-2">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="cursor-pointer" onClick={()=>{
          // download pdf
        }}>
          <p>Download PDF</p>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 13.95C13.7485 13.95 13.95 13.7485 13.95 13.5C13.95 13.2514 13.7485 13.05 13.5 13.05L1.49995 13.05C1.25142 13.05 1.04995 13.2514 1.04995 13.5C1.04995 13.7485 1.25142 13.95 1.49995 13.95L13.5 13.95ZM11.0681 7.5683C11.2439 7.39257 11.2439 7.10764 11.0681 6.93191C10.8924 6.75617 10.6075 6.75617 10.4317 6.93191L7.94993 9.41371L7.94993 1.49998C7.94993 1.25146 7.74846 1.04998 7.49993 1.04998C7.2514 1.04998 7.04993 1.25146 7.04993 1.49998L7.04993 9.41371L4.56813 6.93191C4.39239 6.75617 4.10746 6.75617 3.93173 6.93191C3.75599 7.10764 3.75599 7.39257 3.93173 7.5683L7.18173 10.8183C7.35746 10.994 7.64239 10.994 7.81812 10.8183L11.0681 7.5683Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </CardFooter>
      </Card>
    </>
  );
}
