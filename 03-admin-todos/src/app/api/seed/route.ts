import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      {
        description: "Learn React",
        complete: true,
      },
      {
        description: "Learn Next.js",
      },
      {
        description: "Learn TypeScript",
      },
      {
        description: "Learn GraphQL",
      },
    ],
  });

  return NextResponse.json({
    message: "Seed exceuted successfully",
  });
}
