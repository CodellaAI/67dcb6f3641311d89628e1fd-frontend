
import './globals.css'

export const metadata = {
  title: 'Simple Data Sender',
  description: 'A simple app to send data to MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
