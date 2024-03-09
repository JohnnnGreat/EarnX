"use client";

import Header from "@/components/Header/Header";
import "./globals.css";
import { applyMiddleware, compose, createStore } from "redux";

import reducers from "@/reducers";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import { usePathname } from "next/navigation";
import DashboardHeader from "./dashboard/DashboardHeader";

export default function RootLayout({ children }) {
  const router = usePathname();
  const store = createStore(reducers, compose(applyMiddleware(thunk)));
  const isDashboardRoute = router.startsWith("/dashboard");

  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          <Header />
          <div>{children}</div>
        </body>
      </Provider>
    </html>
  );
}
