import mongoose from "mongoose";
const { model } = mongoose;

const productSchema = new mongoose.Schema ({
    imgSrc: {
        type: String,
        require: true,
    },
    fileKey: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

export default mongoose.models.Product || mongoose.model("Product", productSchema);