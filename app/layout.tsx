import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "@/app/globals.css";


import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
// import { Gradient } from "@/components/gradient";
// import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";


const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explore Morocco",
  description: "Generated by Explore Morocco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={font.className}>
        {/* <BackgroundGradientAnimation> */}
        {/* <Gradient /> */}
        <NavBar />
        {children}
        <Footer />
        {/* </BackgroundGradientAnimation> */}
      </body>
    </html>
  );
}
