const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Customer = require("./customerModel")


const CardSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        required: true,
        unique: true
    },
    cardType: {
        type: String,
        required: true,
        enum: ["REGULAR", "SPECIAL"]
    },
    customerName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "ACTIVE",
        enum: ["ACTIVE", "INACTIVE"]
    },
    vision: {
        type: String,
        required: true
    },
    customerID: {
        type: ObjectId,
        ref: "Customer",
        required: true
    }
});

module.exports = mongoose.model("Card", CardSchema);