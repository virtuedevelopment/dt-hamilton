import { Poppins } from "next/font/google";
import configurations from "@/_data/config";
import "./globals.css";

export const metadata = {
  title: configurations.metadata.title,
  description: configurations.metadata.description,
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
