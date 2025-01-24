const { mongoose } = require("mongoose");

const employeeSchema = new mongoose.Schema (
   {
         fullname : {
            type: String,
            require: true
         },

         profilePhoto : {
            type : String,
            require: false
         },

         department : {
            type: String,
            require : true
         },

         status : {
            type : String,
            requrie : true
         },

         birthDate : {
            type: String,
            require : true
        },

         homeAddress : {
            type : String,
            requrie : true
        },
        telephoneNumber : {
            type : String,
            require : true
         },

         email : {
            type : String,
            require : true,
            unique : true,
            lowercase : true,
         },

         hiringDate : {
              type: String,
              require : true
         },

         salaryAmt : {
            type : Number,
            require : true
         },

         managerId : {
                type : String,
                require : true,
                enum: ["1", "2", "3", "4", "5"],
                 default: "1"
         },

         orgJobLevel : {
             type: String,
             require : true,
             enum: ["L1", "L2", "L3", "L4", "L5"],
            default: "L1"
         },

         employmentType : {
            type : String,
            require : true,
            enum: ["fulltime", "parttime", "contract"],
            default: "fulltime"
         },

         workLocAddress : {
            type : String,
            require : true,
         }
},  {timestamp : true}
)


const Employee = mongoose.model("Employee", employeeSchema)

module.exports = Employee