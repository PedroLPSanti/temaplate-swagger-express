/* eslint-disable global-require */
const glob = require('glob');
const path = require('path');
// Utiliza o nome dos arquivos que estão dentro da view para montar a rota
// Então para o arquivo customer ficaria ANY http://0.0.0.0:4000/api/customer/*
module.exports = app => {
  glob.sync('./api/**/*.js').forEach(file => {
    const fileName = path.basename(file).replace('.js', '');
    const filesExport = require(path.resolve(file));
    const directories = path.dirname(file).replace('.', '');
    const endpoint = filesExport(app, fileName);
    app.use(`${directories}/${fileName}`, endpoint);
  });
};
