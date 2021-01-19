let oktaClientId: string;
if (!process.env.OKTA_CLIENTID) {
  throw new Error("Please define: OKTA_CLIENTID");
} else {
  oktaClientId = process.env.OKTA_CLIENTID;
}

let oktaIssuer: string;
if (!process.env.OKTA_ISSUER) {
  throw new Error("Please define: OKTA_ISSUER");
} else {
  oktaIssuer = process.env.OKTA_ISSUER;
}

export { oktaClientId, oktaIssuer };
