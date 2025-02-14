import express from "express";
import {getReviews, postReview} from "../controllers/reviewController.js";




const reviewRouter = express.Router()

reviewRouter.get('/get', getReviews)
reviewRouter.post('/post', postReview)

export default reviewRouter