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
    "start": "next start",
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
[NginxでSSL（HTTPS）設定！オレオレ（自己署名）証明書を作成しよう！](https://kitsune.blog/nginx-ssl)

[NGINXをdocker-composeで構築し、HTTPSで公開する](https://zenn.dev/kurayasu/articles/443024e98437cb)

---
