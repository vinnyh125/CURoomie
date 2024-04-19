import { Inter } from "next/font/google";
import Nav from "./components/nav";
import Footer from "./components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CURoomie",
  description: "The Ultimate Destination for Finding the Perfect Roommate at Cornell!",
};

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <link rel="icon" href="/img/icon.png" sizes="any" />
      </head>
      <html>
        <body className={inter.className}>
          <Nav/>
          {children}
          <Footer/>
        </body>
      </html>
    </>
  );
}
