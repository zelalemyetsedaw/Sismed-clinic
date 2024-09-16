/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['static.wixstatic.com','www.doctolet.in','drive.google.com'],
        
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'drive.google.com',
            pathname: '/uc',
          },
        ], // Add the external domain here
      },
      
};


export default nextConfig;
