import './globals.css'

export const metadata = {
  title: 'Tharaka Gamage | Software Engineer',
  description: 'Portfolio of Tharaka Gamage - Full Stack Developer & Computer Science Student',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {children}
      </body>
    </html>
  )
}