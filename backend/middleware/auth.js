// import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) => {
//   // Extract token from headers (support both 'token' and 'Authorization: Bearer <token>')
//   let token = req.headers.token || req.headers.authorization;
//   if (token && token.startsWith("Bearer ")) {
//     token = token.split(" ")[1];
//   }

//   if (!token) {
//     return res.status(401).json({ success: false, message: "Not authorized, please login again" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.id; // Attach to req.userId instead of req.body.userId
//     next();
//   } catch (error) {
//     console.error("Token verification error:", error.message);
//     if (error.name === "JsonWebTokenError") {
//       return res.status(401).json({ success: false, message: "Invalid token" });
//     }
//     if (error.name === "TokenExpiredError") {
//       return res.status(401).json({ success: false, message: "Token expired, please login again" });
//     }
//     return res.status(500).json({ success: false, message: "Server error during authentication" });
//   }
// };

// export default authMiddleware;

import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false, message:"Not Authorized Login Again"}) 
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export default authMiddleware;