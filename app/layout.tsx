// app/layout.tsx
import "./globals.css"; // if you have tailwind or global styles

export const metadata = {
  title: "Personal Finance Visualizer",
  description: "Track your income and expenses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-black">{children}</body>
    </html>
  );
}
