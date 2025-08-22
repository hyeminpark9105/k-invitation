import type { NextConfig } from 'next'

const repo = 'k-invitation'
const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',          // 정적 export
  images: { unoptimized: true }, // next/image 정적 처리
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? "https://hyeminpark9105.github.io/k-invitation/" : undefined,
  trailingSlash: true,       // GitHub Pages 경로 이슈 줄이기
}

export default nextConfig
