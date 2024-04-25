import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

const CustomUpload = () => {
  const [imageData, setImageData] = useState(null);
  const handleBeforeUpload = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result;
        // console.log("Base64 Data:", base64Data);
        setImageData(base64Data)
        resolve(false);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };
  return (
    <Upload beforeUpload={handleBeforeUpload} data={imageData} >
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
      {imageData && <img width={300} src={imageData} alt="Uploaded" />}
    </Upload>
  );
};
export default CustomUpload;
