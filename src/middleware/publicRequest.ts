export const publicRequest = async (req, res, next) => {
  try {
    next();
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
