// https://stackoverflow.com/questions/35408729/express-js-prevent-get-favicon-ico
export function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({ nope: true });
  } else {
    next();
  }
}
