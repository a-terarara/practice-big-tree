module.exports = (req, res) => {
  const hour = parseInt(req.params.hour);

  switch (true) {
    case hour <= 7:
      return res.send("..zzZ");
    case hour <= 11:
      return res.send("good morning!");
    case hour <= 15:
      return res.send("hello!");
    case hour <= 18:
      return res.send("good evening!");
    case hour <= 21:
      return res.send("good night!");
    case hour <= 24:
      return res.send("..zzZ");
    default:
      return res.status(400).end();
  }
};
