import React from 'react';
import axios from "axios";
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;

const ImageList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const ImageItem = styled.li`
  flex: 0 0 calc(20% - 10px);
  margin: 0 5px 10px;
  text-align: center;

  img {
    width: 100%;
    height: 100px; /* 원하는 높이로 조절하세요 */
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 5px;
  }

  div {
    font-size: 14px;
    color: #555;
  }
`;

export default function DragDropImageUploader(props) {

  const received_team_id = props.myProp;
  const [files, setFiles] = React.useState([]);
  const [status, setStatus] = React.useState(0);
  const [uploadMessage, setUploadMessage] = React.useState("");

  const handleUploadClick = async () => {

    setUploadMessage("Upload Result\n")
    // 파일 개수만큼 반복문으로 POST
    for (const file of files) {
     // axios로 POST 요청
      try {
        setStatus(1);
        const base64Data = await readFileAsBase64(file);
        // JSON 형식의 데이터 생성
        const jsonData = {
            team_id: received_team_id,
            image: base64Data,
            };

        console.log('jsondata:', jsonData);

        //const response = await axios.post('http://localhost:8080/receipt/image', jsonData,{
        const response = await axios.post('https://dongsseop2api.shop/receipt/image', jsonData,{
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.data === 'success') {
          console.log('Upload success:', file.name);
          setUploadMessage(prevMessage => prevMessage + `SUCCESS: ${file.name}\n`);
        } 
          console.log('Response:', response.data);
        } catch (error) {
          console.error('Error:', error);
          console.error('Upload failed:', file.name);
          setUploadMessage(prevMessage => prevMessage + `FAILED: ${file.name}\n`);
        } finally {
          setStatus(0);
        }
    }
  };

  // 파일을 base64로 인코딩하는 함수
  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return (
    <Container>
      <Label htmlFor="multiple_files">Upload multiple files</Label>
      <Input
        id="multiple_files"
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => setFiles(e.target.files)}
      />
      {files.length > 0 && (
        <ImageList>
          {[...files].map((file, i) => (
            <ImageItem key={i}>
              <img src={URL.createObjectURL(file)} alt={file.name} />
              <div>{file.name}</div>
            </ImageItem>
          ))}
        </ImageList>
      )}
      <Button onClick={handleUploadClick} disabled={status === 1}>
        {status === 0 ? 'Send to server' : <img src="./load.svg" alt="Loading..." />}
      </Button>
      {/* {uploadMessage && <div>{uploadMessage}</div>} */}
      {/* {uploadMessage && <pre>{uploadMessage}</pre>} */}
      {uploadMessage && <p style={{ whiteSpace: 'pre-line', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', margin: '10px 0' }}>
        {uploadMessage}
      </p>}
      {/* {uploadMessage && <p style={{ whiteSpace: 'pre-line' }}>{uploadMessage}</p>} */}
    </Container>
  );
}
