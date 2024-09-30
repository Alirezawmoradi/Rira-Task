import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='min-h-screen grid grid-rows-[80px_1fr_auto] text-gray-900 bg-wall-pattern font-semibold'>
        {children}
      </body>
    </html>
  );
}
