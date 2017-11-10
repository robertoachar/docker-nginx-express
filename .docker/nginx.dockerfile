FROM nginx:latest

LABEL maintainer="robertoachar@gmail.com"

COPY ./.docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
