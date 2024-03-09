"use client";

import Header from "@/components/Header/Header";
import "./globals.css";
import { applyMiddleware, compose, createStore } from "redux";

import reducers from "@/reducers";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const router = usePathname();
  const store = createStore(reducers, compose(applyMiddleware(thunk)));
  const isDashboardRoute = router.startsWith("/dashboard");

  return (
    <html lang="en">
      <Provider store={store}>
        {/* <GoogleOAuthProvider clientId="399902958239-82hndr809hb3s2v59qo5ti0mgl849iun.apps.googleusercontent.com"> */}
        <body>
          {isDashboardRoute ? null : <Header />}
          <div>{children}</div>
        </body>
        {/* </GoogleOAuthProvider> */}
      </Provider>
    </html>
  );
}
