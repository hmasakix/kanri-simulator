/** @type {import('next').NextConfig} */
const nextConfig = {
  // トップページ（/）では、public/index.html（今までのシミュレーター）を表示する
  async rewrites() {
    return [{ source: '/', destination: '/index.html' }];
  },
};

export default nextConfig;
