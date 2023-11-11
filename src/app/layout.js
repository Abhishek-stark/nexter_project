export const metadata = {
  title: "nexter",
  description: "Generated by Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> {children} </body>{" "}
    </html>
  );
}
