import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col ">
      <header className="py-4 px-6">
        <h1 className="text-3xl font-bold">Blogs</h1>
      </header>
      <main className="flex-grow px-6 py-12">{children}</main>
    </div>
  );
}
