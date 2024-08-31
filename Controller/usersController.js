const userModle = require("../Models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

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

const deletById = async (req, res) => {
    let { id } = req.params
    try {
        let deleteTodo = await userModle.findByIdAndDelete(id)
        res.json({ message: "deleted", data: deleteTodo })
    } catch (error) {
        res.json({ message: error.message })

    }

}
const count = async (req, res) => {


    try {
        let all = await userModle.countDocuments();

        res.send({ data: all })

    } catch (error) {

        res.json({ message: error.message })

    }
}

const update = async (req, res) => {
    let { id } = req.params;
    let { title } = req.body;

    try {
        let findTodo = await userModle.findByIdAndUpdate(id, { title }, { new: true });
        res.status(200).json({ message: 'updated', data: findTodo })
    } catch (error) {
        res.json({ message: error.message })
    }
}
const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.json({ message: "email and password required" });

    let user = await userModle.findOne({ email: email });
    if (!user) {
        return res.json({ message: "email or passward is invaild" })
    }
    let isVailed = await bcrypt.compare(password, user.password);
    if (!isVailed)
        return res.json({ message: "email or password is invalid" });

    let token = jwt.sign({ data: { email: user.email, id: user._id ,role:user.role} },process.env.SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: "success", token: token });

}



module.exports = { create, GettAll, deletById, count, update, login }