"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { checkStringWithNumbers } from "./implementation";

const QuestionOne = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [resultArray, setResultArray] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    const inputArray: string[] = inputValue.split(",").map((str) => str.trim());
    setResultArray(checkStringWithNumbers(inputArray));
  };

  return (
    <div className="py-6 container">
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Question One</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid items-center gap-3">
              <Label>Enter strings separated by commas</Label>
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type here..."
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-start flex-col md:flex-col gap-3">
          <Button onClick={handleSubmit}>Submit</Button>
          {resultArray.length > 0 && (
            <div className="mt-4">
              <p className="font-semibold">Result</p>
              <ul className="ml-6 list-disc [&>li]:mt-2">
                {resultArray.map((i, _) => (
                  <li key={_}>{i}</li>
                ))}
              </ul>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuestionOne;
