const Wreck = require('wreck');

exports.home = async function (request, reply) {
  const apiUrl = this.apiBaseUrl + '/recipes';

  Wreck.get(apiUrl, { json: true }, (err, res, payload) => {
    if (err) {
      throw err;
    }

    reply.view('index', {
      recipes: payload,
      user: request.auth.credentials
    });
  });
};

exports.recipesDetail = async function(request, reply) {
  const id = request.params.id;
  const apiUrl = this.apiBaseUrl + `/recipes/${id}`;

  Wreck.get(apiUrl, { json: true }, (err, res, payload) => {
    // console.log(payload);

    reply.view('recipes', {
      recipe: payload
    });
  });
};

exports.login = async function(request, reply) {
  reply.view('login');
};

exports.createRecipe = function(request, reply) {
  reply.view('create', {
    user: request.auth.credentials
  });
};