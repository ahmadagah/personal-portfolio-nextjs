import { ReactNode } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-blue-600 text-white py-4 px-6">
        <h1 className="text-3xl font-bold">Blog</h1>
      </header>
      <main className="flex-grow px-6 py-12">{children}</main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Ahmad Agah. All rights reserved.</p>
      </footer>
    </div>
  );
}
