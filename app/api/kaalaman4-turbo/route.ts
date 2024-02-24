import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  return NextResponse.json({
    message: "kaalaman4-turbo API",
  });
};

export const POST = async (req: Request) => {
  return NextResponse.json({});
};
