import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { db } = await connectToDatabase();
  await db.collection("transactions").deleteOne({ _id: new ObjectId(params.id) });
  return new Response("Deleted", { status: 200 });
}
