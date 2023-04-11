import courses from "./data.json";
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  return NextResponse.json({ message: "Course Created" });
}
