import Authprovider from "@/component/Authprovider/Authprovider";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets : ["latin"]
});

export const metadata = {
  title: "OpenIn app",
  description: "OpenIn app assignment for frontend developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Authprovider>{children}</Authprovider>
      </body>
    </html>
  );
}