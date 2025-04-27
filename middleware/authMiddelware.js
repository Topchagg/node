const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
const token = req.header('Authorization');
console.log(token)
if (!token) return res.status(401).json({ error: 'Access denied' });
try {
 const decoded = jwt.verify(token, '1u48-18wdu-8wdu-8131-2ed');
 req.userId = decoded.userId;
 next();
 } catch (error) {
 res.status(401).json({ error: error });
 }
 };

module.exports = verifyToken;