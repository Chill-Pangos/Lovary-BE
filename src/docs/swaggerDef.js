const { version } = require("../../package.json");
const config = require("../config/config");

const swaggerDef = {
  openapi: "3.0.0",
  info: {
    title: "Lovary Platform API",
    version,
    license: {
      name: "MIT",
      url: "https://github.com/Chill-Pangos/Lovary-BE/blob/master/LICENSE",
    },
  },
  servers: [
    {
      url: `${config.host}/v1`,
    },
  ],
};

module.exports = swaggerDef;
