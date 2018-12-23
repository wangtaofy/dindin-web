// 引入Handlebars模块
const Handlebars = require('handlebars');

// 将字符串中的换行符转换为html换行标签
module.exports = function(text) {
  // 转移字符串，移除有可能出现的HTML标签
  text = Handlebars.Utils.escapeExpression(text);
  text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
  return new Handlebars.SafeString(text);
}