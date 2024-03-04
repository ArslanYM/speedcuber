import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { GoogleGenerativeAI } from "@google/generative-ai";

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
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<String>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function generate() {
    const genAI = new GoogleGenerativeAI(
      process.env.NEXT_PUBLIC_GOOGLE_AI_KEY?? ''
    );
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: "Hello, I want you to answer only those questions which are related to rubik's cube and no other questions should be answered",
        },
        {
          role: "model",
          parts: "Great to meet you. I will only answer questions related to a rubik's cube. What would you like to know about Rubik's cube?",
        },
      ],
      // generationConfig: {
      //   maxOutputTokens: 50,
      // },
    });
    const prompt = input;

    const result = await chat.sendMessage(prompt);
    setIsLoading(false);
    setResponse(result.response.text);
  }

  return (
    <>
      {response ? (
        <div className="font-mono p-2 overflow-y-auto h-52 ">{response}</div>
      ) : isLoading ? (
        <p className="font-mono animate-pulse">Thinking...</p>
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setIsLoading(true);
            try {
              generate();
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
