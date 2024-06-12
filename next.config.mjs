/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "project-the-catalogue.vercel.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    NOTION_DB_PROJECTS: process.env.NOTION_DB_PROJECTS,
    NOTION_DB_ABOUT: process.env.NOTION_DB_ABOUT,
  },
};

nextConfig.redirects = () => {
  return [
    {
      source: "/",
      destination: "/projects",
      permanent: true,
    },
  ];
};

export default nextConfig;
