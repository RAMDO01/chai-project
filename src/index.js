//require("dotenv").config({path:'./env'})
import mongoose from "mongoose";
import {DB_NAME} from './constants.js'



import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})



import express from "express";
const app = express()

;( async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("ERROR: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is running on port ${process.env.PORT}`)
        })
    } catch(error) {
        console.error("ERROR: ",error)
        throw error
    }
})()
