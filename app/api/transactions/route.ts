import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  const { db } = await connectToDatabase();
  const data = await db.collection("transactions").find().toArray();
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { db } = await connectToDatabase();
  const result = await db.collection("transactions").insertOne(body);
  return new Response(JSON.stringify(result), { status: 201 });
}
