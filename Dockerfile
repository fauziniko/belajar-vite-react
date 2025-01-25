# Gunakan Node.js sebagai base image
FROM node:18 AS build

# Set direktori kerja dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package.json package-lock.json ./

# Instal dependensi
RUN npm install

# Salin seluruh kode proyek
COPY . .

# Build aplikasi untuk produksi
RUN npm run build

# Gunakan Node.js sebagai server
FROM node:18

# Set direktori kerja dalam container
WORKDIR /app

# Salin hasil build dan server.js
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./server.js
COPY --from=build /app/node_modules ./node_modules

# Ekspos port 3000
EXPOSE 3000

# Jalankan server dengan Node.js
CMD ["node", "server.js"]
