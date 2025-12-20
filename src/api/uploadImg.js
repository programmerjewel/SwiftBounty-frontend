import axios from "axios";

export const uploadImg = async (imageData) =>{
  const formData = new formData();
  formData.append("image", imageData);

  try {
    const apiKey = import.meta.env.VITE_IMGBB_API
    if(!apiKey){
      throw new Error("IMGBB API is missing!");
    }
     const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      formData
    );
    const responseData = response.data;
    if (responseData && responseData.success && responseData.data) {
      // 4. Return the display_url as intended.
      const imgURL = responseData.data.display_url; 
      return imgURL;
    } else {
      // Handle API errors where the request succeeded but ImgBB indicates failure
      const errorMessage = responseData.error ? responseData.error.message : "ImgBB did not return a valid URL or success status.";
      throw new Error(errorMessage);
    }
  } catch (error) {
    // 5. Improved error logging for network/API failures.
    const errorMessage = error.response
      ? `ImgBB API Error: ${error.response.data.error.message}`
      : error.message;

    console.error("Image upload failed:", errorMessage);
    throw new Error(`Failed to upload profile image to ImgBB: ${errorMessage}`);
  }
}