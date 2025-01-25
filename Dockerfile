# Gunakan Node.js untuk tahap build
FROM node:18 AS build

# Set direktori kerja dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package.json package-lock.json ./

# Instal dependensi
RUN npm install

# Salin seluruh kode proyek ke dalam container
COPY . .

# Build aplikasi untuk produksi
RUN npm run build

# Gunakan Nginx untuk menyajikan aplikasi React
FROM nginx:alpine

# Salin hasil build dari tahap sebelumnya ke dalam direktori Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Salin konfigurasi Nginx khusus untuk SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Ekspos port 80 agar bisa diakses dari luar container
EXPOSE 80

# Jalankan Nginx saat container dimulai
CMD ["nginx", "-g", "daemon off;"]
