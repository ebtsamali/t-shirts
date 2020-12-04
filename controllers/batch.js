const Batch = require('../models/batch');


// add new batch with (Number, Size, Color, Quantity) data in request body
exports.createNewBatch = async (req, res) => {
	const { body: { Number, Size, Color, Quantity }} = req;
	try {
		const batch = await Batch.create({
			Number,
			Size,
			Color,
			Quantity
		})
		res.status(201).send(batch);
	} catch (error) {
		res.status(500).send(error.message)
	}
}


// get all batches
exports.getAllBatches = async (req, res) => {
	try {
		const batches = await Batch.find({}, '-_id Number Size Color Quantity');
		res.status(200).send(batches);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
}


// get total quantity for particular size and color, send size and color values as queries
// response sent is object has totalQuantity property, example {totalQuantity: 150}
exports.getTotalQuantity = async (req, res) => {
	const { query: { color, size } } = req;
	try {
		await Batch.find({Color: color, Size: size}).exec((err, batches) => {
			if(err || !batches.length) {
				res.status(404).send({ message: "No T-shirts Found" });
				return;
			}
			let totalQuantity = 0;
			batches.forEach(batch => {
				totalQuantity = totalQuantity + batch.Quantity;
			});
			res.status(200).send({totalQuantity});
		})
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
}