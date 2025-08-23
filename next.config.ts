import type { NextConfig } from 'next'

const repo = 'k-invitation'
const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',          // 정적 export
  images: { 
    unoptimized: true,
    // loader: 'custom', // 👈 커스텀 로더 사용 
    loader: 'imgix',
    path: 'https://hyeminpark9105.github.io/k-invitation/',
  }, // next/image 정적 처리
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  trailingSlash: true,       // GitHub Pages 경로 이슈 줄이기
  env: {
    // 클라이언트에서도 접근 가능(빌드 타임 주입)
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : ''
  },
}

export default nextConfig
