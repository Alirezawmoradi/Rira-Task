import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='min-h-screen text-gray-200 bg-gray-800'>
        {children}
      </body>
    </html>
  );
}
