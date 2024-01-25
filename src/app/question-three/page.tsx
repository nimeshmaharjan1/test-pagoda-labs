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
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { generateLongestNonRepeatingSubstringWithLinearTime } from "./implementation";

const QuestionThree = () => {
  const [inputString, setInputString] = useState("");
  const [longestSubstring, setLongestSubstring] = useState("");
  const handleSubmit = () => {
    setLongestSubstring(
      generateLongestNonRepeatingSubstringWithLinearTime(inputString)
    );
  };
  return (
    <div className="py-6 container">
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Question Three</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid items-center gap-2">
              <Label>Input String</Label>
              <Input
                type="text"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
                placeholder="Input String"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between">
          <Button onClick={handleSubmit}>Find the longest substring</Button>
          {longestSubstring && (
            <p className="font-bold text-lg">{longestSubstring}</p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuestionThree;
