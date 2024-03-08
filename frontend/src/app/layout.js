"use client";

import Header from "@/components/Header/Header";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { applyMiddleware, compose, createStore } from "redux";

import reducers from "@/reducers";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";

export default function RootLayout({ children }) {
  const store = createStore(reducers, compose(applyMiddleware(thunk)));
  return (
    <html lang="en">
      <Provider store={store}>
        <GoogleOAuthProvider clientId="399902958239-82hndr809hb3s2v59qo5ti0mgl849iun.apps.googleusercontent.com">
          <body>
            <Header />
            <div>{children}</div>
          </body>
        </GoogleOAuthProvider>
      </Provider>
    </html>
  );
}
