
const todoModel = require('../Models/todos')

const update = async (req, res) => {
    let { id } = req.params;
    let { title } = req.body;

    try {
        let findTodo = await todoModel.findByIdAndUpdate(id, { title }, { new: true });
        res.status(200).json({ message: 'updated', data: findTodo })
    } catch (error) {
        res.json({ message: error.message })
    }
}

const create = async (req, res) => {
    let newTodo = req.body;
    try {
        let insert = await todoModel.create(newTodo);
        res.status(201).json({ message: 'created', data: insert })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }


}

const getAllTodos = async (req, res) => {

    try {
        let all = await todoModel.find().populate('userId');

        res.send(all)

    } catch (error) {

        res.json({ message: error.message })

    }
}

const count = async (req, res) => {
    

    try {
        let all = await todoModel.countDocuments();

        res.send({data:all})

    } catch (error) {

        res.json({ message: error.message })

    }
}

const getById = async (req, res) => {
    let { id } = req.params

    try {
        let todo = await todoModel.findById(id)
        res.status(200).json({ data: todo })

    } catch (error) {
        res.JSON({ message: "try agin later " })

    }



}

const deletById = async(req, res) => {
    let {id} = req.params
    try {
        let deleteTodo=await todoModel.findByIdAndDelete(id)
        res.json({message:"deleted",data:deleteTodo})
    } catch (error) {
        res.json({message:error.message})
        
    }
    
}



module.exports = { update, create, deletById, getById, getAllTodos,count }
