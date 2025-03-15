
FROM node:20-alpine

WORKDIR /zhu_haiqiao_ui_garden_build_checks

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY --from=0 /zhu_haiqiao_ui_garden_build_checks/build ./

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]