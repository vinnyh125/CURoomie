import { Inter, Staatliches } from "next/font/google";
import Nav from "./components/nav";
import Footer from "./components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const staatliches = Staatliches({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-staatliches",
});

export const metadata = {
  title: "CURoomie",
  description:
    "The Ultimate Destination for Finding the Perfect Roommate at Cornell!",
};

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <link rel="icon" href="/img/icon.png" sizes="any" />
      </head>
      <html className={inter.className}>
        <body className={staatliches.variable}>
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
