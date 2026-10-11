
import { getAuth } from "firebase-admin/auth";
import fbApp from "./firebaseConfig.js";

const isAuthenticated = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }

  const token = authorization.slice(7);

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }

  try {
    const firebaseAuth = getAuth(fbApp);
    const decodedToken = await firebaseAuth.verifyIdToken(token);

    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Error verifying Firebase token:", error.message);

    return res.status(401).json({
      message: "Unauthorized access",
    });
  }
};

export default isAuthenticated;
