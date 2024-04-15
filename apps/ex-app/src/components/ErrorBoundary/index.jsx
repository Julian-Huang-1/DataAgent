import { useState, useEffect } from "react";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      // 可以在这里记录错误信息到日志服务
      console.error("Error caught by ErrorBoundary:", error, errorInfo);
      setHasError(true);
    };

    // 组件挂载时设置错误处理函数
    window.addEventListener("error", errorHandler);

    // 组件卸载时移除错误处理函数
    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    // 当错误发生时显示备用 UI
    return <div>Oops! Something went wrong.</div>;
  }

  // 正常情况下渲染子组件
  return children;
}
export default ErrorBoundary;
