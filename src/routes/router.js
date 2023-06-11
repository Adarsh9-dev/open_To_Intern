import express from "express";
import { createCollege, collegeDetails } from "../controller/collegeController.js";
import {createIntern} from "../controller/internController.js"

const router = express.Router();


//Create College
router.post('/functionup/colleges', createCollege);

//Create Intern
router.post('/functionup/interns', createIntern);

//Show All details
router.get('/functionup/collegeDetails', collegeDetails)


export default router;