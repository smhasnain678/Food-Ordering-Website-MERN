import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://smhasnain43:34135209@cluster0.ansq5.mongodb.net/food-ordering-web')
    .then(()=>console.log("DB Connected"));
}