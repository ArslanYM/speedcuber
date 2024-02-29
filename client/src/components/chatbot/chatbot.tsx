import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import React, { useState } from "react";
import axios from "axios";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import OpenAI from "openai";

const Chatbot = () => {
  return (
    <div className="animate-bounce fixed bottom-24 right-24 font-mono">
      <div className="w-[10px]">
        <Dialog>
          <DialogTrigger>
            <Avatar>
              <AvatarImage src={"logo.svg"} alt="@user" />
              <AvatarFallback>Chatbot</AvatarFallback>
            </Avatar>
          </DialogTrigger>
          <DialogContent>
            <div className="flex justify-center ">
              <ActiveCard />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

function ActiveCard() {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const [input, setInput] = useState("");
  const [response, setResponse] = useState<String>("");
  return (
    <>
      {response ? (
        <div className="font-mono">{response}</div>
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            // TODO : fix quota issue
            try {
              const response = await openai.chat.completions.create({
                messages: [
                  {
                    role: "system",
                    content:
                      "You are a helpful assistant designed to output JSON.",
                  },
                  {
                    role: "user",
                    content: input,
                  },
                ],
                model: "gpt-3.5-turbo-0125",
                response_format: { type: "json_object" },
              });
              console.log(response.choices[0].message.content);
              setResponse(response?.choices[0]?.message?.content ?? "");
            } catch (error) {
              console.error(error);
              setResponse("An error occurred. Please try again later.");
            }
          }}
        >
          <div className="flex flex-col space-y-6 p-6 font-mono">
            <Label>Ask a question about Rubik's Cube</Label>
            <Textarea
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder=""
            />
            <Button variant={"ghost"} type="submit">
              Ask
            </Button>
          </div>
        </form>
      )}
    </>
  );
}

export default Chatbot;
