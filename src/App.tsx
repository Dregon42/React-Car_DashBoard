import { BrowserRouter, Routes, Route } from "react-router-dom"
import routes from "./config/routes";
import NavBar from "./components/Navbar";
import { Provider } from 'react-redux'
import { store } from "./redux/store";

// import AuthTracker from "./auth/AuthTracker";


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Provider store={store}>
        <Routes>
          { routes.map((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.component />
              }
              />
          )) }
        </Routes>
        </Provider>
    </BrowserRouter>
  )
}

export default App
