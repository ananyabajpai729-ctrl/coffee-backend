import {v2 as Cloudinary} from 'cloudinary';

Cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) =>{
    try{
        if(!localFilePath) return null;
        const result = await Cloudinary.uploader.upload(localFilePath, {resource_type : "auto"});
        return response;
    }catch(err){

    }
}