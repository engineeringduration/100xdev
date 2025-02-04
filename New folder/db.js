const mongoose= require("mongoose");
const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://rmane0069:Sd22Rm@cluster0.2pbop.mongodb.net/Cluster0",{
        useNewUrlParser: true,
         useUnifiedTopology: true,
        
        // serverSelectionTimeoutMS: 30000,// Timeout after 30s instead of 30s
    });
    const connection = mongoose.connection;
    connection.on("error", (err) => {
        console.log("MongoDB connection error: ", err);
    }
    );
    connection.once("open", () => {
         
        console.log("MongoDB connected");
    });
    return connection;


}

module.exports = connectDB;
// exports = connectDB;