import express from "express"
import { Router } from "express"
import { verifyJWT } from "../middlewares/auth.middleware.js"
import { generateInterViewReportController, getInterviewReportByIdController, getAllInterviewReportsController, generateResumePdfController } from "../controllers/interview.controller.js"
import upload from "../middlewares/multer.middleware.js"

const router = Router()

router.route("/").post(verifyJWT, upload.single("resume"), generateInterViewReportController)

router.route("/report/:interviewId").get(verifyJWT, getInterviewReportByIdController)

router.route("/").get(verifyJWT, getAllInterviewReportsController)

router.route("/resume/pdf/:interviewReportId").post(verifyJWT, generateResumePdfController)

export default router