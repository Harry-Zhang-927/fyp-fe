import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const MyDropzone = () => {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');
    reader.onload = () => {
      const binaryStr = reader.result;
      const blob = new Blob([binaryStr], { type: 'application/octet-stream' });

      fetch('http://localhost:8081/labelingPar', {
        method: 'POST',
        credentials: 'include',
        body: blob,
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
    };

    reader.readAsArrayBuffer(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>拖拽一些文件到这个区域，或者点击选择文件</p>
    </div>
  );
}

export default MyDropzone;
