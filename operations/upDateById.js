import { ObjectId } from "mongodb";

export async function update(req, res, db) {
  const result = await db
    .collection("amman_hotels")
    .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });

  res.status(200);
  res.send(result);
  console.log(result);
}
