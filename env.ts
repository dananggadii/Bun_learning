const database = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASS,
  name: process.env.DATABASE_NAME,
};

console.info(database);
