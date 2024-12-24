import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="shadow-lg">
        <div className="container mx-auto py-6 px-6 flex items-center justify-between">
          <h1 className="text-4xl font-bold">Blogs</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12">{children}</main>
    </div>
  );
}
