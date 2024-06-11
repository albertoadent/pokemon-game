module.exports = {
  development: {
    storage: process.env.DB_FILE,
    dialect: "sqlite",
    seederStorage:process.env.SEEDER_STORAGE,
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    logging: console.log
  },
};