import { z, ZodError } from "zod";

const uservalidate = (schema) => (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({ message: "Invalid data input" });
  }

  try {
    req.body = schema.parse(req.body); 
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(z.formatError(error));
    }
    return res.status(400).json({ message: error.message });
  }
};

export default uservalidate;