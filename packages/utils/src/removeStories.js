const fs = require("fs");
const path = require("path");
//指定搜索的目录
const directory = "D:\\DataAgent\\apps\\ex-app\\src\\components";
const remove = (directory, name) => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error("读取目录时出错:", err);
      return;
    }
    // 遍历目录中的所有文件和子目录
    files.forEach((file) => {
      const filePath = path.join(directory, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error("获取文件状态时出错:", err);
          return;
        }

        if (stats.isDirectory()) {
          // 如果是子目录，则递归搜索子目录中的文件
          remove(filePath, name);
        } else if (stats.isFile() && file.includes(name)) {
          // 如果是文件且文件名中包含"stories"，则删除文件
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error("删除文件时出错:", err);
            } else {
              console.log(`已删除文件: ${filePath}`);
            }
          });
        }
      });
    });
  });
};
remove(directory, "stories");
