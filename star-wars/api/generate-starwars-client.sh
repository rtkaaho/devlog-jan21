#!/usr/bin/env bash

set -Eeuo pipefail
set -x

# cd to the api dir
cd ~/wolf/devlog-jan21/star-wars/api

# remove the old gen
rm -rf ./star-wars

# generate the files in the docker container and copy them out to the specified output folder
docker run --rm \
  -v "$(pwd)":/local \
  openapitools/openapi-generator-cli:v4.3.1 generate \
  -i /local/starwars_spec.yaml \
  -g typescript-fetch \
  -o "/local/star-wars" \
  -c /local/config.json \
  --additional-properties=typescriptThreePlus=true
