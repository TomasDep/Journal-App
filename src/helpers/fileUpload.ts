const FILE_UPLOAD_URL: string = import.meta.env.VITE_CLOUDINARY_URL;
const FILE_UPLOAD_VERSION: string = import.meta.env.VITE_CLOUDINARY_VERSION;
const FILE_UPLOAD_NAME: string = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET: string = import.meta.env.VITE_CLOUDINARY_CLOUD_PRESET;

export const fileUpload = async (file: any) => {
  if (!file) throw new Error("File must not be null");
  const cloudUrl: string = `${FILE_UPLOAD_URL}${FILE_UPLOAD_VERSION}${FILE_UPLOAD_NAME}upload`;
  const formData = new FormData();
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("file", file);
  try {
    const resp = await fetch(cloudUrl, { method: "POST", body: formData });
    if (!resp.ok) {
      throw new Error("Error with upload file");
    }
    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};
