import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Autenticação | Micro-SaaS Name',
    template: '%s | Micro-SaaS Name',
  },
  description: 'Micro-SaaS Description',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-svh max-h-full overflow-hidden w-full flex justify-center items-center bg-gray-950">
      {children}
    </div>
  );
}
