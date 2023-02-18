import "./globals.css";
import Navbar from "./auth/Navbar";

import QueryWrapper from "./utils/QueryWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`mx-4 md:mx-48 xl:mx-96 bg-gray-200`}>
        <QueryWrapper>
          <Navbar />
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
