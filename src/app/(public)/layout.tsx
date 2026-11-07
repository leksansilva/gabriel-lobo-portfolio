import { Footer, Header, WhatsAppButton } from '../(common)/components';

export default function PublicLayout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col overflow-x-clip">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
