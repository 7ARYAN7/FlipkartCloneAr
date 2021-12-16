import  mongoose  from 'mongoose';


const Connection = async (username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@ecommerceweb.ximuk.mongodb.net/Project0?retryWrites=true&w=majority`;

    try{
    await mongoose.connect(URL, {useNewUrlParser:true, useUnifiedTopology:true});
    console.log("DataBase connected successfully");
    }catch(error){
        console.log('Error:', error.message);
    }
}

export default Connection;