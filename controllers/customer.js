
const get = async (req, res) => {
  console.log(req.query);
  try {
    return res.status(200).send("FUNCIONOU");
  } catch (e) {
    return res.status(200).send(e);
  }
};

const post = async (req, res) => {
  try {
    return res.status(200).send(req.body);
  } catch (e) {
    return res.status(200).send(e);
  }
};


module.exports = {
  get,
  post
};
