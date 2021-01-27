#!/usr/bin/env sh

# https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#The-Set-Builtin
set -eu

envsubst '${OKTA_CLIENTID} ${OKTA_ISSUER}' < /usr/share/nginx/html/src_bootstrap_tsx.app.bundle.js > /usr/share/nginx/html/src_bootstrap_tsx.app.bundle.js.tmp
rm /usr/share/nginx/html/src_bootstrap_tsx.app.bundle.js
mv /usr/share/nginx/html/src_bootstrap_tsx.app.bundle.js.tmp /usr/share/nginx/html/src_bootstrap_tsx.app.bundle.js

exec "$@"
