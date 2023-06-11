import College from "../model/collegeModel.js";
import Intern from "../model/internModel.js"


const createCollege = async (req,res)=> {
    try {
        const {name,fullName,logoLink} = req.body;
        if (!name) {
            return res.status(400).json({status: false, message: "Some data are missing"});
        }
        if (!fullName) {
            return res.status(400).json({status: false, message: "Some data are missing"});
        }
        if (!logoLink) {
            return res.status(400).json({status: false, message: "Some data are missing"});
        }
        
        const result = await College.create(req.body);
        res.status(201).json({status: true, data: req.body});

    } catch(err) {
        res.status(500).json({status: false, message: err.message});
    }
}

const collegeDetails = async (req,res) => {
    try {
        if (Object.keys(req.query).length === 0) {
            return res.status(400).json({status: false, message: "Enter college name"});
        }
        
        const collegeName = req.query.collegeName;

        const collegeData = await College.findOne({name: collegeName})
        if (!collegeData) {
            return res.status(404).json({status: false, message: "College not found"});
        }

        let internsList = await Intern.find({collegeId: collegeData._id}, '_id name email mobile');

        const responseList = {
            name: collegeData.name,
            fullName: collegeData.fullName,
            logoLink: collegeData.logoLink,
            interns: internsList 
        }
        
        res.status(200).json({status: true, data: responseList});

    } catch(err) {
        res.status(500).json({status: false, message: err.message});
    }
}

export {createCollege, collegeDetails};