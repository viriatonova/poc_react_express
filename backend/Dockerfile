FROM node:18.12
WORKDIR /code
USER root
RUN chown -R 1000:1000 "/root/.npm"
USER node

# RUN addgroup node && adduser -S -G node 
# RUN mkdir /code && chown node:node /code
# USER node

# COPY package.json ./
# COPY . .