
import Layout from "../components/layout";
import 'aos/dist/aos.css'; 
import "../styles/globals.css";

// import 'swiper/css';
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { ThemeProvider } from "next-themes";

export const metadata = {
  "theme-color": '#000000',
  icons: [
   {
     rel: 'icon',
     type: 'image/png',
     sizes: '32x32',
     url: '/favicon-32x32.png',
   },
   {
     rel: 'icon',
     type: 'image/png',
     sizes: '16x16',
     url: '/favicon-16x16.png',
   },
   {
     rel: 'apple-touch-icon',
     sizes: '180x180',
     url: '/apple-touch-icon.png',
   },
   {
     rel: 'android-chrome-icon',
     type: 'image/png',
     sizes: '192x192',
     url: '/android-chrome-192x192.png',
   },
   {
     rel: 'android-chrome-icon',
     type: 'image/png',
     sizes: '512x512',
     url: '/android-chrome-512x512.png',
   },
 ],
 } 


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ThemeProvider>
        <Layout>
        {children}
        </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}

