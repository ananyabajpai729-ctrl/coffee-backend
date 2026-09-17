import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) =>{
    res.statusCode(200).json({
        message: "Coffee aur Backend"
    })
})

export {
    registerUser,
}