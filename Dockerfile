# Gunakan Node.js sebagai tahap build
FROM node:18 AS build

# Set direktori kerja di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json untuk instalasi dependensi
COPY package.json package-lock.json ./

# Instal dependensi
RUN npm install

# Salin seluruh kode proyek ke dalam container
COPY . .

# Bangun aplikasi React menggunakan Vite untuk produksi
RUN npm run build

# Gunakan image Nginx sebagai server untuk menyajikan aplikasi
FROM nginx:alpine

# Salin hasil build dari tahap sebelumnya ke direktori Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Salin konfigurasi khusus Nginx untuk aplikasi SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Ekspos port 3000 agar sesuai dengan produksi
EXPOSE 3000

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]
