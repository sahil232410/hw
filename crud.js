const mongoose = require('mongoose');
const connectdb=()=>{
    mongoose.connect("mongodb://localhost:27017/h1").then(() => {
    console.log("conected!!");
    
}).catch((err) => {
    console.log(err);
    
});
}
connectdb();

const studschema=mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
        
    },
    sal:{
        type:Number,
        require:true,
        
    }
})
const studentModel=mongoose.model("stud",studschema)
async function insertdata(sname,ssal) {
    try{
    const data = new studentModel({
    name:sname,
    sal:ssal
    
})
const result = await data.save()
console.log(result);
    }catch(error){
    console.log(error);
}

}
async function displaystud() {
    try {
        const result=await studentModel.find()
        console.log(result);
        
        
    } catch (error) {
        console.log(error);
        
    }
    
}
insertdata("nimesh",1);
displaystud()