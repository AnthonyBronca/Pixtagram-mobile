import * as React from 'react'
import { Provider } from 'react-redux';
import AuthNavigation from "./AuthNavigation";
import configureStore from './src/store';
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <AuthNavigation />
    </Provider>
  )
}
