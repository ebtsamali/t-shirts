const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
	Number: {
		type: Number,
		min: [1, 'Number must be greater than 0'],
		required: [true, 'Number is required'],
		unique: true,
	},
	Size: {
		type: String,
		enum: ['S', 'M', 'L', 'XL'],
		required: [true, 'Size is required'],
	},
	Color: {
		type: String,
		enum: ['red', 'blue', 'black', 'green'],
		required: [true, 'Color is required'],
	},
	Quantity: {
		type: Number,
		min: [1, 'Quantity must be greater than 0'],
		required: [true, 'Quantity is required'],
	}
}, {
	timestamps: true,
})

const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;