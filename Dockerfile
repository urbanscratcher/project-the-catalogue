# 1. 빌드 단계
FROM node:18-alpine AS builder

# 2. pnpm 설치
RUN npm install -g pnpm@8.15.8

# 3. 작업 디렉토리 설정
WORKDIR /app

# 4. 패키지 종속성 복사 및 설치
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install --frozen-lockfile

# 5. 애플리케이션 소스 코드 복사
COPY . .

# 6. 빌드 단계
RUN pnpm build

# 7. 런타임 단계
FROM node:18-alpine

# 8. pnpm 설치
RUN npm install -g pnpm@8.6.12

# 9. 작업 디렉토리 설정
WORKDIR /app

# 10. 빌드 결과물 및 필요한 파일 복사
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/next.config.mjs ./

# 11. 프로덕션 종속성 설치
RUN pnpm install --prod

# 12. 포트 설정
EXPOSE 3000

# 13. 애플리케이션 시작
CMD ["pnpm", "start"]