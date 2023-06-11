import Intern from "../model/internModel.js";
import College from "../model/collegeModel.js"
import validator from "validator";

//create Intern
const createIntern = async (req,res) => {
    try {
        const {name, email, mobile, collegeId} = req.body;
        const regex = /^(\+91|0)?[6789]\d{9}$/;
        const regexName = /^[A-Za-z]/;
        if (!name) {
            return res.status(400).json({status: false, message: "Some data are missing"});
        }
        if (!email) {
            return res.status(400).json({status: false, message: "Some data are missing"});
        }
        if (!mobile) {
            return res.status(400).json({status: false, message: "Some data are missing"});
        }
        if (!collegeId) {
            return res.status(400).json({status: false, message: "Some data are missing"});
        }

        if (!regexName.test(name)) {
            return res.status(400).json({status: false, message: "Invalid Name"});
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({status: false, message: "Invalid Email"});
        }
        if (!regex.test(mobile)) {
            return res.status(400).json({status: false, message: "Invalid Mobile no"});
        }
        const isCollege = await College.findById({_id: collegeId})
        if (!isCollege) {
            return res.status(400).json({status: false, message: "Invalid College Id"});
        }
        
        const result = await Intern.create(req.body);
        res.status(201).json({status: true, data: req.body})

    } catch(err) {
        res.status(500).json({status: false, message: err.message});
    }
}

export {createIntern}