import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async rewrites() {
    return [
      { source: "/dashboard", destination: "/ui/dashboard" },
      { source: "/dashboard/invoices", destination: "/ui/invoices" },
      { source: "/dashboard/customers", destination: "/ui/customers" },
    ];
  },
};

export default nextConfig;
