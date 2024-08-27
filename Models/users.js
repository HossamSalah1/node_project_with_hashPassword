const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const userScima=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trum:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trum:true,
        validate:{
            validator:function(val){
                return /^[a-zA-Z]{3,8}@(gmail|outlook)(.com)$/.test(val)
            },
            message:()=>`invaild mail or password`
        }

    },
    password:{
        type:String,
        required:true

    }
})

userScima.pre('save',async function(next){

    let salt=await bcrypt.genSalt(10);
    let hashpass=await bcrypt.hash(this.password,salt);
    this.password =hashpass

    next();
})

const userModel= mongoose.model('users',userScima)

module.exports=userModel