// GetRequestButton.js
import React from 'react';

const GetRequestButton = ({ url, params }) => {
  // 请求发送函数
  const sendGetRequest = () => {
    // 构建带查询参数的 URL
    const query = new URLSearchParams(params).toString();
    const fullUrl = `${url}?${query}`;

    // 使用 fetch 发送 GET 请求
    fetch(fullUrl,{
        credentials: 'include'
    })
      .then(response => response.json()) // 转换响应为 JSON
      .then(data => console.log(data)) // 处理数据
      .catch(error => console.error('Error:', error)); // 处理错误
  };

  return (
    <button onClick={sendGetRequest}>发送 GET 请求</button>
  );
}

export default GetRequestButton;
