FROM node

COPY ../angular-users /usr/src/

WORKDIR /usr/src/angular-users

RUN npm install

RUN ng build --prod

RUN node 

