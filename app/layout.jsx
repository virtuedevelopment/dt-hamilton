import localFont from "next/font/local";
import configurations from "@/lib/config/site";
import "@/styles/composer.css";
import "@/styles/globals.css";

export const metadata = {
  title: configurations.metadata.title,
  description: configurations.metadata.description,
};

const googleSans = localFont({
  src: "./fonts/google-sans-latin.woff2",
  weight: "400 700",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={googleSans.className}>
        {children}
      </body>
    </html>
  );
}
