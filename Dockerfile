FROM node:16-alpine AS build

WORKDIR /zhu_haiqiao_ui_garden

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /zhu_haiqiao_ui_garden/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

