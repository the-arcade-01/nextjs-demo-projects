import mongoose from "mongoose";
import Grid from "gridfs-stream";
Grid.mongo = mongoose.mongo;

export default async function handler(req, res) {
  const {
    query: { filename },
    method,
  } = req;

  const conn = mongoose.createConnection(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  gfs = Grid(conn.db);
  gfs.collection("uploads");

  switch (method) {
    case "POST":
      try {
      } catch (error) {
        res.status(400).json({ itemnotfound: "Something failed" });
      }
      break;
    default:
      res.status(500).json({ itemnotfound: "POST failed" });
      break;
  }
}
