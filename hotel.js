import express from "express";

import { connect } from "./connection/connect.js";
import { getHotels } from "./operations/getHotels.js";
import { addHotel } from "./operations/addHotel.js";
import { getHotelByPrice } from "./operations/getHotelByPrice.js";
import { update } from "./operations/upDateById.js";
import { getHotelById } from "./operations/getHotelById.js";
import { deleteById } from "./operations/deleteById.js";

const app = express();
const db = await connect();
app.use(express.json());

app.get("/api/v1/hotels", (req, res) => getHotels(req, res, db));

app.post("/api/v1/hotels", (req, res) => addHotel(req, res, db));

app.get("/api/v1/hotels/:Price", (req, res) => getHotelByPrice(req, res, db));

app.put("/api/v1/hotels/:id", (req, res) => update(req, res, db));

app.get("/api/v1/hotels/one/:_id", (req, res) => getHotelById(req, res, db));

app.delete("/api/v1/hotels/:_id", (req, res) => deleteById(req, res, db));

app.listen(3024);
