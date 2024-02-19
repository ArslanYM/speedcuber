import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselComponent() {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-2xl "
      >
        {/* {make content auto scroll} */}
        <CarouselContent>
          {youtubeTutorials.map((obj, index) => (
            <CarouselItem key={index} className="">
              <div className="p-1 ">
                
                  <Card className="">
                    <CardContent className="flex h-[450px] items-center justify-center p-6">
                      <iframe
                        className=" w-full h-full object-cover rounded-md"
                        src={obj.link}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </CardContent>
                  </Card>
                
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}


const youtubeTutorials = [
  {
    link: "https://www.youtube.com/embed/7Ron6MN45LY",
  },
  {
    link: "https://www.youtube.com/embed/7Ron6MN45LY",
  },
  {
    link: "https://www.youtube.com/embed/7Ron6MN45LY",
  },
];
