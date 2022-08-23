const express =require('express')
const router=express.Router()
const schema=require('../models/schema')
router.get('/', async(req,res) => {
    try{
           const data = await schema.find()
           res.json(data)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/:id', async(req,res) => {
    try{
           const singledata = await schema.findById(req.params.id)
           res.json(singledata)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const data1 = new schema({
        name: req.body.name,
        branch: req.body.branch,
        idno: req.body.idno
    })

    try{
        const a1 =  await data1.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})
router.patch('/:id',async(req,res)=> {
    try{
        const data2 = await schema.findById(req.params.id) 
        data2.branch = req.body.branch
        const a1 = await data2.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
router.delete('/:id',async(req,res)=> {
    try{
        const data2 = await schema.findById(req.params.id) 
        data2.branch = req.body.branch
        const a1 = await data2.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
module.exports=router