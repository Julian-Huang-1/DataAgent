//格式化时间
function formatTime(timeStr) {
  // 创建一个 Date 对象
  var timeObj = new Date(timeStr);

  // 获取当前时间
  var now = new Date();

  // 判断时间是否是昨天
  var yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  var dayStr = "";
  if (timeObj.toDateString() === yesterday.toDateString()) {
    dayStr = "昨天";
  } else {
    // 使用 toLocaleDateString() 方法获取日期部分的字符串
    dayStr = "今天";
  }

  // 获取小时数和分钟数
  var hour = timeObj.getHours();
  var minute = timeObj.getMinutes();

  // 判断是上午还是下午
  var am_pm = hour < 12 ? "上午" : "下午";
  if (hour >= 24) {
    if (hour == 24) {
      hour = "00";
    } else {
      hour -= 12;
    }
  }

  // 格式化时间字符串
  var formattedTime =
    dayStr +
    " " +
    am_pm +
    " " +
    hour +
    ":" +
    (minute < 10 ? "0" + minute : minute);

  return formattedTime;
}

// 示例时间字符串
var timeStr = Date.now();

// 格式化时间
var formattedTime = formatTime(timeStr);
console.log(formattedTime);
// 输出：昨天 下午 4:30
export default formatTime;
