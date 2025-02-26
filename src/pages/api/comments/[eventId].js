import { MongoClient } from "mongodb";

export default async function commentHandler(req, res) {
  if (req.method === "POST") {
    const { email, content, eventId } = req.body;

    if (!email.includes("@") || !content || content.trim() === "") {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const uri =
      "mongodb+srv://iceSPHERE:2nXinEw0DzA0vTAV@cluster0.cfu3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri);

    const newComment = {
      email: email,
      content: content,
      eventId: eventId,
    };

    try {
      const db = client.db("events");
      const collection = db.collection("comments");
      const result = await collection.insertOne(newComment);

      newComment.id = result.insertedId;
      res.status(201).json({ message: "New comment added" });
    } catch {
      console.error(error);
    } finally {
      console.log(newComment);
      await client.close();
    }
  }
  if (req.method === "GET") {
    const uri =
      "mongodb+srv://iceSPHERE:2nXinEw0DzA0vTAV@cluster0.cfu3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const db = client.db("events");
      const collection = db.collection("comments");

      const { eventId } = req.query;
      const comments = await collection.find( eventId ? { eventId } : {} ).toArray();
      
      res.status(200).json({ comments: comments });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
