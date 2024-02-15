import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Accordian(props) {
  return (
    <div>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>{props.trigger}</AccordionTrigger>
          <AccordionContent>
            {props.content}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}






