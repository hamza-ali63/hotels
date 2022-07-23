export async function addHotel(req, res, db) {
  const result = await db.collection("amman_hotels").insertOne(req.body);
  res.status(204);
  res.send(result);
  console.log(result);
}
