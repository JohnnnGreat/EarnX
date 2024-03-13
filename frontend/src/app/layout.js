"use client";

import Header from "@/components/Header/Header";
import "./globals.css";
import { applyMiddleware, compose, createStore } from "redux";

import reducers from "@/reducers";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import { usePathname } from "next/navigation";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

export default function RootLayout({ children }) {
  const router = usePathname();

  const isDashboardRoute = router.startsWith("/dashboard");
  const createNoopStorage = () => {
    return {
      getItem(_key) {
        return Promise.resolve(null);
      },
      setItem(_key, value) {
        return Promise.resolve(value);
      },
      removeItem(_key) {
        return Promise.resolve();
      },
    };
  };
  const storage =
    typeof window !== "undefined"
      ? createWebStorage("local")
      : createNoopStorage();

  const persistConfig = {
    key: "root",
    storage,
  };

  // const persistedReducer = persistReducer(persistConfig, reducers);
  const store = createStore(reducers, compose(applyMiddleware(thunk)));

  const persistor = persistStore(store);

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
