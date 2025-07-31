import userModel from "../models/userModel.js";
import mongoose from "mongoose";

// Add items to user cart
const addToCart = async (req, res) => {
  console.log("userId in addToCart:", req.userId);
  try {
    let userData = await userModel.findById(req.userId);
    let cartData = userData.cartData || {};
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.error("Error in addToCart:", error);
    res.json({ success: false, message: "Error" });
  }
};

// Remove items from user cart
const removeFromCart = async (req, res) => {
  console.log("userId in removeFromCart:", req.userId);
  try {
    let userData = await userModel.findById(req.userId);
    let cartData = userData.cartData || {};
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.userId, { cartData });
    res.json({ success: true, message: "Removed From Cart" });
  } catch (error) {
    console.error("Error in removeFromCart:", error);
    res.json({ success: false, message: "Error" });
  }
};

// Fetch user cart data
const getCart = async (req, res) => {
  console.log("userId in getCart:", req.userId);
  try {
    if (!mongoose.Types.ObjectId.isValid(req.userId)) {
      console.log("Invalid ObjectId format");
      return res.status(400).json({ success: false, message: "Invalid user ID format" });
    }

    let userData = await userModel.findById(req.userId);
    if (!userData) {
      console.log("User not found in DB");
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.error("Error in getCart:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


// const getCart = async (req, res) => {
//   console.log("userId in getCart:", req.body.userId);
//   try {
//     // Validate ObjectId
//     if (!mongoose.Types.ObjectId.isValid(req.body.userId)) {
//       console.log("Invalid ObjectId format");
//       return res.json({ success: false, message: "Invalid user ID format" });
//     }

//     let userData = await userModel.findById(req.body.userId);
//     if (!userData) {
//       console.log("User not found in DB");
//       return res.json({ success: false, message: "User not found" });
//     }

//     let cartData = userData.cartData || {};
//     res.json({ success: true, cartData });
//   } catch (error) {
//     console.error("Error in getCart:", error);
//     res.json({ success: false, message: "Error" });
//   }
// };

export { addToCart, removeFromCart, getCart };



// import userModel from "../models/userModel.js"

// // add items to user cart
// const addToCart = async (req, res) => {
//       console.log("userId in addToCart:", req.body.userId);
//     try {
//         let userData = await userModel.findById(req.body.userId);
//         let cartData = await userData.cartData;
//         if (!cartData[req.body.itemId]) {
//             cartData[req.body.itemId] = 1;
//         }
//         else {
//             cartData[req.body.itemId] += 1;
//         }
//         await userModel.findByIdAndUpdate(req.body.userId, { cartData });
//         res.json({ success: true, message: "Added To Cart" })
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" })
//     }
// }


// // remove items from user cart
// const removeFromCart = async (req, res) => {
//     console.log("userId in removeFromCart:", req.body.userId);
//     try {
//         let userData = await userModel.findById(req.body.userId)
//         let cartData = await userData.cartData;
//         if (cartData[req.body.itemId] > 0) {
//             cartData[req.body.itemId] -= 1;
//         }
//         await userModel.findByIdAndUpdate(req.body.userId, { cartData });
//         res.json({ success: true, message: "Removed From Cart" })
//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: "Error" })
//     }
// }


// // fetch user cart data

// // fetch user cart data
// // const getCart = async (req, res) => {
// //     try {
// //         // 👇 Yahan add karo
// //         // console.log("userId in getCart:", req.body.userId);

// //         let userData = await userModel.findById(req.body.userId);

// //         if (!userData) {
// //             return res.json({ success: false, message: "User not found" });
// //         }

// //         let cartData = userData.cartData || {};
// //         res.json({ success: true, cartData });
        
// //     } catch (error) {
// //         console.log(error);
// //         res.json({ success: false, message: "Error" });
// //     }
// // };


// // const getCart = async (req, res) => {
// //     try {
// //         console.log("userId in getCart:", req.body.userId);

// //         if (!mongoose.Types.ObjectId.isValid(req.body.userId)) {
// //             console.log("Invalid ObjectId format");
// //             return res.json({ success: false, message: "Invalid user ID format" });
// //         }

// //         let userData = await userModel.findById(req.body.userId);

// //         if (!userData) {
// //             console.log("User not found in DB");
// //             return res.json({ success: false, message: "User not found" });
// //         }

// //         let cartData = userData.cartData || {};
// //         res.json({ success: true, cartData });

// //     } catch (error) {
// //         console.error("Error in getCart:", error);
// //         res.json({ success: false, message: "Error" });
// //     }
// // };



// // const getCart = async (req, res) => {
// //     try {
// //         console.log("userId in getCart:", req.body.userId);
        
// //         let userData = await userModel.findById(req.body.userId);

// //         if (!userData) {
// //             return res.json({ success: false, message: "User not found" });
// //         }

// //         let cartData = userData.cartData || {};
// //         res.json({ success: true, cartData });
        
// //     } catch (error) {
// //         console.log(error);
// //         res.json({ success: false, message: "Error" });
// //     }
// // };

// const getCart = async (req, res) => {
//     console.log("userId in getCart:", req.body.userId);
//     try {
//         let userData = await userModel.findById(req.body.userId);
//         let cartData = await userData.cartData;
//         res.json({ success: true, cartData })
//     } catch (error) {
//         console.log(error);
//         res.json({success:false, message:"Error"})
//     }
// }


// export { addToCart, removeFromCart, getCart }