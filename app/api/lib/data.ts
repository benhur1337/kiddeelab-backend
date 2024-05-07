
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kiddeelab:Kiddeelab123@kiddeelab.ailzfzw.mongodb.net/?retryWrites=true&w=majority&appName=kiddeelab";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});