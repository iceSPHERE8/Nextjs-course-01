export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    const { MongoClient } = require("mongodb");

    const uri =
      "mongodb+srv://iceSPHERE:2nXinEw0DzA0vTAV@cluster0.cfu3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri);

    async function run() {
      try {
        const db = await client.db("sample-mflix");
        const collection = await db.collection("newsletter");

        const existingEmail = await collection.findOne({ email: email });

        if (existingEmail) {
          console.log("already exist:", email);
          return;
        }
        await collection.insertOne({ email: email });
      } catch {
        console.error(error);
      } finally {
        await client.close();
      }
    }

    run().catch(console.dir);
    res.status(201).json({ message: `Subscribed with ${email}` });
  }
}
