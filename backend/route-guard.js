const config = require('./configs/ms-auth');
const BearerStrategy = require('passport-azure-ad').BearerStrategy;
const passport = require('passport');

const options = {
    identityMetadata: `https://${config.metadata.authority}/${config.credentials.tenantID}/${config.metadata.version}/${config.metadata.discovery}`,
    issuer: `https://${config.metadata.authority}/${config.credentials.tenantID}/${config.metadata.version}`,
    clientID: config.credentials.clientID,
    audience: config.credentials.audience,
    validateIssuer: config.settings.validateIssuer,
    passReqToCallback: config.settings.passReqToCallback,
    loggingLevel: config.settings.loggingLevel,
    scope: config.resource.scope
}
const bearerStrategy = new BearerStrategy(options, (token, done) => {
        // Send user info using the second argument
        done(null, {}, token);
    }
);

passport.use(bearerStrategy);

module.exports = passport.authenticate('oauth-bearer', {session: false});