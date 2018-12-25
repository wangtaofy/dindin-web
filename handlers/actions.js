const Wreck = require('wreck');

// 登录表单提交
exports.login = async function(request, reply) {
  const apiUrl = this.apiBaseUrl + '/login';

  Wreck.post(apiUrl, {
    payload: JSON.stringify(request.payload),
    json: true
  }, (err, res, payload) => {
    if (err) {
      throw err;
    }

    if (res.statusCode !== 200) {
      return reply.redirect(this.webBaseUrl + '/login');
    }
    
    // 设置cookie
    request.cookieAuth.set({
      token: payload.token
    });

    reply.redirect(this.webBaseUrl);
  });
}

// 创建食谱表单提交
exports.createRecipe = async function(request, reply) {
  const apiUrl = this.apiBaseUrl + '/recipes';
  const token = request.auth.credentials.token;

  Wreck.post(apiUrl, {
    payload: JSON.stringify(request.payload),
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }, (err, res, payload) => {
    if (err) {
      throw err;
    }

    reply.redirect(this.webBaseUrl);
  });
}