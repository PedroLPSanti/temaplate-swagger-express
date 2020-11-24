
const get = async (req, res) => {
  const { search = '', size = 10, page = 0 } = {
    ...req.queryStringParameters,
  };
  try {
    return res.status(200).send("FUNCIONOU");
  } catch (e) {
    return res.status(200).send(e);
  }
};

module.exports = {
  get
};
