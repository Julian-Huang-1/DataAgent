/* eslint-disable no-unused-vars */
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"; // 导入tomorrow风格
const CodeBlockComponent = ({ language, code }) => {
  return (
    <div>
      <div
        style={{
          marginBottom: "-7px",
          padding: "5px 10px",
          backgroundColor: "#2f2f2f",
          color: "#ccc",
          borderRadius: "5px 5px 0 0",
          borderBottom: "1px solid #676767",
        }}
      >
        {language.toLowerCase()} {/* 显示编程语言名称 */}
      </div>
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        showLineNumbers={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const MarkdownRenderer = ({ markdownText }) => {
  const codeBlocks = extractCodeBlocks(markdownText);

  return (
    <div className="markdown-container">
      <ReactMarkdown
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            if (!inline && match) {
              const language = match[1];
              return <CodeBlockComponent language={language} code={children} />;
            } else {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          },
        }}
      >
        {markdownText}
      </ReactMarkdown>
    </div>
  );
};

function extractCodeBlocks(markdownText) {
  const codeBlockRegex = /```([a-zA-Z]*)\n([\s\S]*?)\n```/g;
  const codeBlocks = [];

  let match;
  while ((match = codeBlockRegex.exec(markdownText)) !== null) {
    const language = match[1];
    const code = match[2];
    codeBlocks.push({ language, code });
  }

  return codeBlocks;
}

export default MarkdownRenderer;
