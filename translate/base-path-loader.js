module.exports = function (source) {
  return source.replace(/url\('\/assets\//g, 'url(\'assets/');
}
