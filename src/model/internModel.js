import mongoose from "mongoose";
import College from "./collegeModel.js"

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    collegeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: College,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},{timestamps: true})

export default new mongoose.model('InternDetails',internSchema);