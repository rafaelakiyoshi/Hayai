FROM mhart/alpine-node

WORKDIR /app
COPY . .

RUN ls
RUN yarn install
# RUN yarn build

EXPOSE 3000
EXPOSE 49153
CMD ["yarn", "dev"]