module.exports = {
  development: {
    storage: process.env.DB_FILE,
    dialect: process.env.DIALECT,
    seederStorage:process.env.SEEDER_STORAGE,
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    // logging: false
  },
};