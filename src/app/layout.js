import './globals.css'

export const metadata = {
  title: 'Silly Goose',
  description: 'Crypto assistant for beginners',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FFDED2]">{children}</body>
    </html>
  )
}
