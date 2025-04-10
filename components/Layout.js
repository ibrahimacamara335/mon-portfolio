import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem', minHeight: '80vh' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
