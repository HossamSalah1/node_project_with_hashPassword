let jwt = require("jsonwebtoken");
let { promisify } = require("util");

async function auth(req, res, next) {
    let { authorization } = req.headers
    console.log(authorization);

    if (!authorization)
        return res.status(401).json("u must login")


    try {
        let decoded = await promisify(jwt.verify)(authorization, process.env.SECRET)
        req.id = decoded.data.id;
        req.role = decoded.data.role

        next();
    } catch (error) {
        return res.status(401).json("unauthorized")
    }






}

function restructedTo(...roles) {
    return (req, res, next) => {

        if (!roles.includes(req.role))
            return res.json({ message: "u not have permission" })

        next()
    }
}

module.exports = { auth, restructedTo }