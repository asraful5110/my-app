import mongoose from "mongoose";

const usersSchemas = new mongoose.Schema({
   
  fname : {
    type : String,
    required : true,
  },
  lname : {
    type : String,
    required : false,
  },
  username : {
    type : String,
    required : true,
  },
  email : {
    type : String,
    required : true,
    validate : {
      validator : function(email:string){
        // eslint-disable-next-line no-useless-escape
        const isValidEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/igm
        return isValidEmail.test(email)
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      message : (props:any)=> `${props.value} is not a valid email`
    }
  },
  gender : {
    type : String,
    enum : ["male",'female',"not set"],
    default : "not set"
  },

 dateOfBirth : {
  type : Date,
  required : false,
 },
password : {
  type : String,
  required : true,
},
role : {
  type : String,
  required : true,
  enum : ["user","admin"],
  default : "user"
}
},{
    timestamps : true
})



export const users = mongoose.model('User',usersSchemas);
