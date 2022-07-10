const redirectTo = (url, res) => {
  res.redirect(301, url);
  res.end();
};

const indexRouteOk = (req) => {
  switch (req.url) {
    case '/index/':
    case '/index':
    case '/index.html':
      return false;
    default:
      return true;
  }
}
const genericRouteOk = (req) => {
  switch (req.url) {
    case '/generic/':
    case '/generic.html':
      return false;
    default:
      return true;
  }
}
const elementsRouteOk = (req) => {
  switch (req.url) {
    case '/elements/':
    case '/elements.html':
      return false;
    default:
      return true;
  }
}

const index = (req, res) => {
  if (!indexRouteOk(req)) {
    redirectTo('/', res); // el redirect no termina el procesamiento
    return;
  }
  res.render('home');
};
const generic = (req, res) => {
  if (!genericRouteOk(req)) {
    redirectTo('/generic', res); // el redirect no termina el procesamiento
    return;
  }
  res.render('generic');
};
const elements = (req, res) => {
  if (!elementsRouteOk(req)) {
    redirectTo('/elements', res); // el redirect no termina el procesamiento
    return;
  }
  res.render('elements');
};

export {
  index,
  generic,
  elements
}