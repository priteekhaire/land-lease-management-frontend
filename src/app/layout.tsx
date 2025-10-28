"use client";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/app/providers/AuthProvider";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/app/providers/AuthProvider";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
        {/* ✅ AuthProvider must wrap EVERYTHING */}
        <AuthProvider>
          <MainApp>{children}</MainApp>
        </AuthProvider>
      </body>
    </html>
  );
}

// ✅ A separate component where we can safely call useAuth()
function MainApp({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const publicPages = ["/login", "/register"];
  const isPublic = publicPages.some((path) => pathname.startsWith(path));

  useEffect(() => {
    if (!isAuthenticated && !isPublic) {
      router.replace("/login");
    }
  }, [isAuthenticated, isPublic, router]);

  return (
    <QueryClientProvider client={new QueryClient()}>
      {isPublic ? children : <Layout>{children}</Layout>}
    </QueryClientProvider>
  );
}
