import { create } from "zustand";

const useStore = create(() => {
  return {
    messages: [
      {
        role: "system",
        content:
          '```python\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr\n\n# 测试\narr = [64, 34, 25, 12, 22, 11, 90]\nsorted_arr = bubble_sort(arr)\nprint("排序后的数组:", sorted_arr)\n```\n',
      },
    ],
  };
});
export const addMessage = (message) => {
  useStore.setState((state) => ({
    messages: [...state.messages, message], // 使用扩展运算符创建一个新数组，添加新消息
  }));
};

export default useStore;
