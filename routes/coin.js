const express = require('express')
const CoinModel = require('../models/Coin')
const verify = require('../middleware/authMiddelware')
const { default: mongoose } = require('mongoose')


const router = express.router()

router.get('/',async (req,res) => {
    try{
        const data = await CoinModel.find()
        res.status(200).json({'data':data})
    }catch(error){
        res.status(500).json({'message':'Something went wrong','error':error.message})
    }
})

router.get('/',async (req,res) => {
    try {
        const id = req.params.id

        if(!mongoose.isValidObjectId(id)){
            res.status(400).json({'message':'Wrong id'})
        }

        const data = await CoinModel.findById(id)
        res.status(200).json({'data':data})

    }catch(error){
        res.status(500).json({'message':'Something went wrong','error':error.message})
    }
})

router.post('/',verify, async(req,res) => {
    try {
        await CoinModel.create(req.body)
        res.status(201).json({'message':'Coin is created'})
    }catch(error){
        res.status(500).json({'message':'Something went wrong','error':error.message})
    }
})


router.put('/',verify,async(req,res) => {
    try {
        const {id,data} = req.body

        if(!mongoose.isValidObjectId(id)){
            res.status(400).json({'message':'Wrong id'})
        }

        await CoinModel.findByIdAndUpdate(id,data,{new:true})
    }catch(error){
        res.status(500).json({'message':'Something went wrong','error':error.message})
    }
})

router.delete('/',verify,async(req,res) => {
    try {
        const {id} = req.body

        if(!mongoose.isValidObjectId(id)){
            res.status(400).json({"message":"Wrong id"})
        }
        await CoinModel.findByIdAndDelete(id)
        res.status(200).json({"message":"Coin is deleted"})
    }catch(error){
        res.status(500).json({'message':'Something went wrong','error':error.message})
    }
})

module.exports = router