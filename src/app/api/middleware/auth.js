import jwt from 'jsonwebtoken'; // Assuming you've installed jsonwebtoken

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Extract token from Bearer token format

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret
    req.user = decoded; // Attach decoded user data to the request object
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
  }
};

export default verifyToken;
