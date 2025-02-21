/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export
    images: {
      unoptimized: true, // Fixes Next.js images for static export
    },
     // Use your GitHub repo name
    
  };
  
  export default nextConfig;
  
