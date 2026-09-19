import type { NextConfig } from "next";

// GitHub Pages 等でサブパス (https://<user>.github.io/<repo>/) に置く場合は
// NEXT_PUBLIC_BASE_PATH=/<repo> を設定してビルドする
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // 静的サイトとして out/ に書き出す
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
