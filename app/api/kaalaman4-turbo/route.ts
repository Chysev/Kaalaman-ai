// Defaults
import { NextResponse, NextRequest } from "next/server";

// Component
import session from "./modelWrapper";

// GET Reqest
export const GET = async () => {
  return NextResponse.json({ message: "Hello" });
};

// POST Request
export const POST = async (req: NextRequest) => {
  // GET the body of the form and JSON input
  const reqData: any = await req.json();
  const userInput = reqData.userInput;

  // Read userInput from JSON
  const KaalamanAIResponse = await session.prompt(userInput);

  // POST AI Response in JSON
  return NextResponse.json({ KaalamanAIResponse });
};
