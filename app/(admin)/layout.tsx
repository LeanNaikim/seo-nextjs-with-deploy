import SideBarComponent from "@/components/sidebar/SideBarComponent";
import React from "react";
import "@/app/globals.css";


export default function Adminlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <aside className="fixed h-screen">
          <SideBarComponent />
        </aside>
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}
