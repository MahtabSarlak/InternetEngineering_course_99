require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const { getRoleByUserName } = require("../resolvers/roles-resolver");
const logger = require("../util/logger");
const client = jwksClient({
  jwksUri: `https://emergencio.eu.auth0.com/.well-known/jwks.json`,
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (error, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

function isTokenValid(token) {
  if (token) {
    const bearerToken = token.split(" ");

    const result = new Promise((resolve, reject) => {
      jwt.verify(
        bearerToken[1],
        getKey,
        {
          audience: "https://emergencio-api-v2/",
          issuer: `https://emergencio.eu.auth0.com/`,
          algorithms: ["RS256"],
        },
        (error, decoded) => {
          if (error) {
            resolve({ error });
          }
          if (decoded) {
            resolve({ decoded });
          }
        }
      );
    });

    return result;
  }

  return { error: "No token provided" };
}
const extractTokenFromContext = (context) => {
  const { token } = context();
  const { tokenErr } = isTokenValid(token);
  if (tokenErr) {
    logger.logger.error({
      message: "Unauthorized Request.",
    });
    throw tokenErr;
  }
  return extractTokenFromContext;
};

const checkAccess = async (email, section) => {
  const roleDoc = getRoleByUserName({ userName: email });
  await roleDoc.then((res) => {
    const { role } = res;
    if (role === "owner") return true;
    if (section === "controll") {
      return role === "controller";
    } else if (section === "field") {
      return role === "fieldagent";
    } else if (section === "admin") {
      return role === "admin";
    }
    return false;
  });
};
const isRequestValid = (context, section) => {
  const token = extractTokenFromContext(context);
  if (!checkAccess(context().email, section)) {
    console.log("=== " + "fieldagent" + " === ");
    logger.logger.error({
      message: "User doesn't have access to endpoint",
    });
    return false;
  }
  return true;
};
module.exports = {
  isRequestValid: isRequestValid,
};
