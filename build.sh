#/bin/bash

set -exuo pipefail

rm -rf nodejs 
docker build -t prisma-pg-layer-nodejs .
CONTAINER=$(docker run -d prisma-pg-layer-nodejs false)
docker cp $CONTAINER:/var/task/layer nodejs/
docker rm $CONTAINER

# delete unnecessary files
# ...
