#!/usr/bin/env sh

# https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#The-Set-Builtin
set -eu

envsubst '${OKTA_CLIENTID} ${OKTA_ISSUER}' < /frontend/src/env.ts > /frontend/src/env.ts.tmp
rm /frontend/src/env.ts
mv /frontend/src/env.ts.tmp /frontend/src/env.ts

exec "$@"
