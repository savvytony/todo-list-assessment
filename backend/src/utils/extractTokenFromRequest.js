const extractTokenFromRequest = (req) => {
  const authHeader = req.headers.authorization;

  return authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
};

export default extractTokenFromRequest;
