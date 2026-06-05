import type { ReactNode } from 'react';

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <main className="py-10">
      <div className="container mx-auto max-w-305 px-4">
        <h1 className="text-3xl font-bold text-center mb-10 text-[#0979a8]">{title}</h1>
        {children}
      </div>
    </main>
  );
}
