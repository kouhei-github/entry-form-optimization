## 構築方法

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
---

## 静的サイトの作成手順
[Next.jsを静的htmlにして、GitHub ActionsからS3にデプロイする](https://zenn.dev/harasho/articles/e972a51e6fa52b1b160c)

package.json
```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "export": "next build && next export", // これを追加
    "start": "next build && next start",
    "lint": "next lint"
  },
  "dependencies": {
    "eslint": "8.29.0",
    "eslint-config-next": "13.0.6",
    "next": "13.0.6",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}
```

[Next.jsを静的htmlにして、GitHub ActionsからS3にデプロイする](https://zenn.dev/harasho/articles/e972a51e6fa52b1b160c)

next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // これを追加
}

module.exports = nextConfig

```

---

## DockerでHTTPSで構築する手順
### 参考
[[Docker]Djangoを無料でHTTPS化して簡単にデプロイする方法](https://sleepless-se.net/2018/06/12/dockerdjango%E3%82%92%E7%84%A1%E6%96%99%E3%81%A7https%E5%8C%96%E3%81%97%E3%81%A6%E7%B0%A1%E5%8D%98%E3%81%AB%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/)
[Nginx-Lets'encript の設定を簡単にいい感じにしてくれるやつ ](https://github.com/SteveLTN/https-portal)

---

## docker-compose.yml用 .envファイル
```dotenv
# local
NODE_PORT="8080:3000"
NODE_COMMAND="yarn dev"
HTTP_PORTAL_DOMAIN="localhost -> http://nextjs:3000"
STAGE="local"

# production
NODE_PORT="3000"
NODE_COMMAND="yarn start"
HTTP_PORTAL_DOMAIN="clone.kohei-nagamatsu.com -> http://nextjs:3000"
STAGE="production"
```

---
