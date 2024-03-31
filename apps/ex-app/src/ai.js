import axios from "axios";
async function fetchData(messages) {
  try {
    // 发送 POST 请求到指定的接口地址
    const response = await axios.post("http://127.0.0.1:8000/ai", messages, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 如果请求成功，可以在这里处理服务器返回的数据
    console.log("服务器返回的数据：", response.data);

    // 返回获取到的数据，你可以根据需要进行处理
    return response.data;
  } catch (error) {
    // 如果请求失败，可以在这里处理错误]
    console.error("请求接口发生错误：", error.message);

    // 返回一个空数组或者其他你认为合适的值，表示请求失败
    return [];
  }
}
async function uploadExcel(formdata) {
  try {
    // 发送 POST 请求到指定的接口地址
    const response = await axios.post("http://127.0.0.1:8000/upload", formdata);

    // 如果请求成功，可以在这里处理服务器返回的数据
    console.log("服务器返回的数据：", response.data);

    // 返回获取到的数据，你可以根据需要进行处理
    return response.data;
  } catch (error) {
    // 如果请求失败，可以在这里处理错误]
    console.error("请求接口发生错误：", error.message);

    // 返回一个空数组或者其他你认为合适的值，表示请求失败
    return [];
  }
}
export default fetchData;
export { uploadExcel };
