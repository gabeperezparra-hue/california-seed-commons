import './globals.css';

export const metadata = {
  title: 'California Seed Commons',
  description: 'Seeds for all.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
