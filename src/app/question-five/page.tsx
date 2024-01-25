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
import {
  calculateAdditivePersistence,
  calculateMultiplicativePersistence,
} from "./implementation";

const QuestionFive = () => {
  const [number, setNumber] = useState(0);
  const [additivePersistence, setAdditivePersistence] = useState(0);
  const [multiplicativePersistence, setMultiplicativePersistence] = useState(0);
  const handleSubmit = () => {
    setAdditivePersistence(calculateAdditivePersistence(number));
    setMultiplicativePersistence(calculateMultiplicativePersistence(number));
  };
  return (
    <div className="py-6 container">
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Question Five</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid items-center gap-2">
              <Label>Positive integers</Label>
              <Input
                type="text"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
                placeholder="Type here..."
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between">
          <Button onClick={handleSubmit}>
            Calculate Additive & Multiplicative Persistance
          </Button>
          <ul className="ml-6 list-disc [&>li]:mt-2">
            <li>
              Additive Persistance:{" "}
              <span className="font-bold"> {additivePersistence}</span>
            </li>
            <li>
              Multiplicative Persistance:{" "}
              <span className="font-bold"> {multiplicativePersistence}</span>
            </li>
          </ul>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuestionFive;
