import { useState } from 'react';
import axios from 'axios';

export default function UploadImage() {
    const [previewImage, setPreviewImage] = useState<string | null>(null);
  
    const [fileName, setFileName] = useState("");


    const saveFile = (e: any) => {
      setPreviewImage(null);
      setFileName('');
      //if not cancel
      if (e.target.files[0] && e.target.files[0].name) {
        setFileName(e.target.files[0].name);
        const url = URL.createObjectURL(e.target.files[0]);
        setPreviewImage(url);
        uploadFile(e.target.files[0]);
      }
    };
    const serverprod = process.env.RENDER_WS_URL_REMOTE ? process.env.RENDER_WS_URL_REMOTE :'';
    //const serverlocal = process.env.RENDER_WS_URL_LOCAL ? process.env.RENDER_WS_URL_LOCAL :'';
    const uploadFile = async (file: any) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", fileName);
      try {
        const res = await axios.post(
          serverprod,
          formData
        );
        console.log(res);
        alert('File uploaded successfully');
      } catch (ex) {
        console.log(ex);
      }
    };
  
    return (
      <div onChange={saveFile}>
        <label htmlFor="files" style={{ border: 'solid', borderRadius: '10px', padding: "2px" }} >Select and upload Images</label>
        <input id="files" type="file" style={{ visibility: 'hidden', width: '10px' }} />
        {fileName ? fileName : ''}
        {previewImage && <img width={40} height={40} src={previewImage} alt="Preview" />}
  
      </div>
    );
  }