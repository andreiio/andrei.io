#!/usr/bin/env bash
# Wrapper script for Netlify/CI hugo builds

set -euo pipefail # http://redsymbol.net/articles/unofficial-bash-strict-mode

if [[ ! -z ${CONTEXT+x} ]]; then
	if [[ "${CONTEXT}" != production ]]; then
		HUGO_BASEURL=$DEPLOY_URL
	fi

	echo "HUGO_BASEURL = ${HUGO_BASEURL}"
fi

echo ""

echo "[1/2] Build site assets ..."
npm run build

echo "[2/2] Generating site ..."
hugo --minify

echo "Done!"
