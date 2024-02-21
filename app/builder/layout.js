import NavBar from "./NavBar/NavBar";

export const metadata = {
  title: "NoCodeSSG - Builder",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
