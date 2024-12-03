FROM node:18-alpine
ENV HOME=/src
WORKDIR $HOME
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","start"]