# ---------- Stage 1: Build ----------
# Node baut die statischen React-Dateien (Ordner /app/build)
FROM node:22-alpine AS build
WORKDIR /app

# Zuerst nur package*.json kopieren -> npm-Install wird als eigener Layer gecacht
COPY package.json package-lock.json ./
RUN npm ci

# Dann den Quellcode kopieren und bauen
COPY public ./public
COPY src ./src
RUN npm run build

# ---------- Stage 2: Runtime ----------
# Nginx liefert nur noch die fertigen statischen Dateien aus (kein Node im finalen Image)
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
