const userModle = require("../Models/users")

const create = async (req, res) => {
    let newData = req.body
    try {
        const newUser = await userModle.create(newData);
        res.status(201).json({ message: 'created', data: newUser })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}
const GettAll = async (req, res) => {

    try {
        const allUser = await userModle.find()
        res.json({ data: allUser })
    } catch (error) {
        res.json({ message: error.message })

    }

}

const deletById = async(req, res) => {
    let {id} = req.params
    try {
        let deleteTodo=await userModle.findByIdAndDelete(id)
        res.json({message:"deleted",data:deleteTodo})
    } catch (error) {
        res.json({message:error.message})
        
    }
    
}


module.exports = { create, GettAll, deletById }