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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { GenderType, generateFiscalCode } from "./implementation";

const QuestionTwo = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState<GenderType>("M");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [fiscalCode, setFiscalCode] = useState("");
  const handleGenerateCode = () => {
    const personalData = { name, surname, gender, dateOfBirth };
    const fiscalCode = generateFiscalCode(personalData);
    setFiscalCode(fiscalCode);
  };

  return (
    <div className="py-6 container">
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Question Two</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid items-center gap-2">
              <Label>First Name</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="grid items-center gap-2">
              <Label>Surname</Label>
              <Input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Surname"
              />
            </div>
            <div className="grid items-center gap-2">
              <Label>Gender</Label>
              <Select
                value={gender}
                onValueChange={(e) => setGender(e as GenderType)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select gender</SelectLabel>
                    <SelectItem value="M">Male</SelectItem>
                    <SelectItem value="F">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid items-center gap-2">
              <Label>Date of Birth (DD/MM/YYYY)</Label>
              <Input
                type="text"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                placeholder="Date of Birth (DD/MM/YYYY)"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between">
          <Button onClick={handleGenerateCode}>Generate Fiscal Code</Button>
          {fiscalCode && <p className="font-bold text-lg">{fiscalCode}</p>}
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuestionTwo;
