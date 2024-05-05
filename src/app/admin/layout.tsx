'use client'
import { Inter, Roboto, Lora } from 'next/font/google'
import "../../styles/styles.scss";
import Sidebar from "../modules/lib/components/Sidebar/Sidebar";
import { useRouter } from "next/navigation";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900']
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const session = localStorage.getItem('token');
  console.log('session', session);
  if (!session) {
    // Redirect to login page
    router.push('/auth/login');
  }
  
  return (
    <>
        
      <div className="bg-blueGray-100 flex">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="adminLayout">
          {children}
        </div>
      </div>
    </>
  );
}
