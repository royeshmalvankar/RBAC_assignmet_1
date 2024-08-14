import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["CREATOR","VIEWER","VIEW_ALL"],
        required: true,
        default: "VIEWER"
    }
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel