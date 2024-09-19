import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title:"Techfusion 3.0",
    description:"Increadible event brought to you by Student's asscoiation of Information Technology, Walchand College of Engineering, Sangli",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-b from-[#308de4]  to-[#0d1e2e]  `}
            >
                {children}
            </body>
        </html>
    );
}
