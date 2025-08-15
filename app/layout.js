import { Raleway, Exo_2, Orbitron } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
// import { Provider } from "@/Provider";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});
const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
});
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata = {
  title: "Luminex - Validator Tracking",
  description: "Track validator data on Avalanche and Sui blockchain",
  generator: "Luminex",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${exo2.variable} ${orbitron.variable} antialiased text-lg`}
      >
        {/* <Provider> */}
          {children}
          <Footer />
        {/* </Provider> */}
      </body>
    </html>
  );
}
