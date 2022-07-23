import { ObjectId } from "mongodb";

export async function deleteById(req, res, db) {
  const query = { _id: new ObjectId(req.params._id) };
  const result = await db.collection("amman_hotels").deleteOne(query);
  if (result.deletedCount >= 1) {
    res.status(204);
    res.send(result, "done");
    console.log(result, "done");
  } else {
    res.status(404);
    res.send("wrong");
    console.log("wrong");
  }
}
