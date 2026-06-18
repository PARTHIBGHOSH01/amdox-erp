const jwt = require('jsonwebtoken');
require('dotenv').config();

const token = jwt.sign(
  {
    id: 'test_user_123',
    name: 'Test User',
    email: 'test@example.com',
    tenantId: 'tenant_001',
    role: 'admin'
  },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

console.log('🔑 Generated Token:');
console.log(token);