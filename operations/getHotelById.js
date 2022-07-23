import { ObjectId } from "mongodb";

export async function getHotelById(req, res, db) {
  const query = { _id: new ObjectId(req.params._id) };
  const result = await db.collection("amman_hotels").findOne(query);
  res.status(200);
  res.send(result);
  console.log(result);
}
