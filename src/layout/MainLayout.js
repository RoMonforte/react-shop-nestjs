import Header from '../components/Header';
import Nav from '../common/Nav';
import { useRouter } from 'next/router';

export default function MainLayout({ children }) {
  const router = useRouter();
  return (
    <>
      <div className="min-h-full">
        {router.pathname !== '/' && <Header />}
        <Nav />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
