const Wreck = require('wreck');

exports.home = async function (request, reply) {
  const apiUrl = this.apiBaseUrl + '/recipes';

  Wreck.get(apiUrl, { json: true }, (err, res, payload) => {
    if (err) {
      throw err;
    }

    reply.view('index', {
      recipes: payload
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