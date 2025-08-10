FROM node:current-alpine3.22

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

#this says: "hey, ur server needs to run on port 3000"
EXPOSE 3000 

CMD ["npm", "start"]


