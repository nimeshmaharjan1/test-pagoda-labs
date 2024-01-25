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
import { getTop3Hashtags } from "./implementation";

const QuestionFour = () => {
  const [headline, setHeadline] = useState("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const handleSubmit = () => {
    setHashtags(getTop3Hashtags(headline));
  };
  return (
    <div className="py-6 container">
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Question Four</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid items-center gap-2">
              <Label>Headline</Label>
              <Input
                type="text"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="Enter headline..."
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between">
          <Button onClick={handleSubmit}>Get Top 3 Hashtags</Button>
          {hashtags.length && (
            <ul className="ml-6 list-disc [&>li]:mt-2">
              {hashtags.map((i, _) => (
                <li key={_}>{i}</li>
              ))}
            </ul>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuestionFour;
