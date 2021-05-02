import React, { createContext } from "react";
import zhCN from "antd/lib/locale-provider/zh_CN";
import RouterRelation from "./router/router";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; //  存储机制，可换成其他机制，当前使用sessionStorage机制
import allReducers from "./redux/reducer/index.reducer";
import { ConfigProvider } from "antd";
import { composeWithDevTools } from "redux-devtools-extension";
import { PersistGate } from 'redux-persist/integration/react'
function App() {
  const persistConfig = {
    key: "root",
    storage:storageSession
  }
  const _persistReducer = persistReducer(persistConfig, allReducers);
  const enhancers = process.env.NODE_ENV == "development" ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
  // const store = createStore(allReducers,enhancers);
  const store = createStore(_persistReducer, enhancers);
  let persistor = persistStore(store)
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterRelation />
          </PersistGate>
        </Provider>
      </ConfigProvider>
    </div>
  );
}

export default App;
