import type { Metadata } from "next";
import "./globals.css";
import { StepContextProvider } from "@/context/GlobalContext";

export const metadata: Metadata = {
  title: "Two step form",
  description: "Two step registration form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StepContextProvider>
      <html lang="en">
        <body>
          <main className="bg-slate-500">{children}</main>
        </body>
      </html>
    </StepContextProvider>
  );
}
