import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.[^/]+$).*)",
  ],
};

export default nextConfig;
