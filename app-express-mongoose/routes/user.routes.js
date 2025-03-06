const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.post('/',async (req,res)=>{
     try {
        const user = new User(req.body)
        await user.save()   
        res.status(201).send({message:'user saved successfully',user})
     } catch (error){
        res.status(500).send({message: error})

     }

})


router.get('/all',async (req,res)=>{
    try{

    const users = await User.find()
    res.send(users)
    }catch(error){

    }
})

router.get('/:name',async (req,res)=>{
    try{
    const name = req.params.name
    const user = await User.findOne({name})
    if(user){
        res.status(200).send(user)

    }else{
        res.status(404).send({message:"user not found"})
    }
   
    }catch(error){

    }
})


router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id; 

       
        const user = await User.findById(id);

        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).send({ message: "An error occurred", error: error.message });
    }
});

//update user avec id 
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id; 
        const updateData = req.body; 

        
        const user = await User.findByIdAndUpdate(id, updateData, { new: true });

        if (user) {
            res.status(200).send({ message: "User updated successfully", user });
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).send({ message: "An error occurred", error: error.message });
    }
});


//delete user
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id; 

       
        const user = await User.findByIdAndDelete(id);

        if (user) {
            res.status(200).send({ message: "User deleted successfully" });
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).send({ message: "An error occurred", error: error.message });
    }
});

//Update avec name
router.put('/update/:name',async (req,res)=>{
    try{
        const name = req.params.name
        const user = await User.findOne({name})
        if(!user){
            res.status(404).send({message:"user not found"})
        }
         const userUpdate = await User.findByIdAndUpdate({name},{$set:{name:req?.body.name || 'ali'}},{new:true})
         res.status(201).send({message:'user updated successfully',userUpdate})
    }catch (error){
        res.status(500).send({message:error.message})

    }
})




//user delete avec name

router.delete('/delete/:name',async (req,res)=>{
    try{
        const name = req.params.name
        const user = await User.findOne({name})
        if(!user){
            res.status(404).send({message:"user not found"})
        }
          await  User.deleteOne({name})
         res.status(200).send({message:'user deleted successfully'})
    }catch (error){
        res.status(500).send({message:error.message})

    }
})


   



module.exports = router

