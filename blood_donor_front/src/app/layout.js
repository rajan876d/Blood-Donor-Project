import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/footers';
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className='min-h-screen'>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
