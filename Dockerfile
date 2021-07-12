FROM lambci/lambda:build-nodejs12.x

COPY layer ./layer
RUN cd layer && npm i --no-save
RUN cd layer && npm ls pg prisma > versions.txt
