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
import { Textarea } from "@/components/ui/textarea"
import { Label } from "../ui/label";

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
  return (
    <>
      {response ? (
        <div className="font-mono">
        {response}
        </div>
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            // TODO : fix quota issue 
            try {
              const response = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                  model: "gpt-3.5-turbo",
                  prompt: input,
                  max_tokens: 150,
                  temperature: 0.5,
                  n: 1,
                  stop: ["\n"],
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
                  },
                }
              );

              setResponse(response.data.choices[0].text);
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
