import {v2 as Cloudinary} from 'cloudinary';
import fs from 'fs';
Cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) =>{
    try{
        if(!localFilePath) return null;
        const result = await Cloudinary.uploader.upload(localFilePath, {resource_type : "auto"});
        fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got successful
        return result;
    }catch(err){
        console.log("cloudinary upload failed", err);
        fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

const deleteFromCloudinary = async (publicId, resourceType= "image") =>{
    try{
        if(!publicId) return null;
        const result = await Cloudinary.uploader.destroy(publicId, {resource_type : resourceType});
        return result;
    }catch(err){
        console.log("cloudinary delete failed", err);
        return null;
    }
}

export {uploadOnCloudinary, deleteFromCloudinary};