export async function getHotels(req, res, db) {
  const result = await db.collection("amman_hotels").find({}).toArray();
  res.status(200);
  res.send(result);
  console.log(result);
}
