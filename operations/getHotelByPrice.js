export async function getHotelByPrice(req, res, db) {
  const query = { Price_For_One_Night: req.params.Price };
  const result = await db.collection("amman_hotels").findOne(query);
  if (result !== null) {
    res.status(200);
    res.send(result);
    console.log(result);
  } else {
    res.status(204);
    res.send("wrong");
    console.log("something wrong");
  }
}
