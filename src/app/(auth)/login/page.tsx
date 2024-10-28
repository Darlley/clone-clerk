import PageSignIn from '@/components/PageSignIn';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
};

export default function Login() {
  return <PageSignIn />;
}
