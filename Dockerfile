# Sử dụng một image Node.js chính xác làm base image
FROM node:18-alpine AS builder

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và yarn.lock vào thư mục làm việc
COPY package.json yarn.lock ./

# Cài đặt các dependencies bằng Yarn
RUN yarn 

# Sao chép toàn bộ mã nguồn của ứng dụng vào thư mục làm việc
COPY . .

# Biên dịch ứng dụng NestJS thành mã JavaScript
RUN yarn build

# Sử dụng một image Node.js nhỏ hơn làm base image cho production
FROM node:18-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép các file build từ stage trước vào container
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Expose cổng mà ứng dụng sẽ lắng nghe trên
EXPOSE 3333

# Command để khởi động ứng dụng khi container được chạy
CMD ["node", "dist/main"]
