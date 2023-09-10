FROM node:18.17.1-alpine
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /home/app
COPY package.json pnpm-lock.yaml ./
RUN pnpm i
CMD ["pnpm","run","dev"]
