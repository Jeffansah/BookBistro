import Navbar from "./components/Navbar";
import AuthContext from "./context/AuthContext";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";

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
      <body>
        <main className="bg-white min-h-screen w-screen">
          <AuthContext>
            <>
              <Navbar />
              <main className="max-w-screen-xl m-auto bg-white">
                {children}
              </main>
            </>
          </AuthContext>
        </main>
      </body>
    </html>
  );
}
