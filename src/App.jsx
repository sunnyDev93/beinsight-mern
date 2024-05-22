import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import Ans from "./pages/market-access/Ans";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  // const location = useLocation();
  // const isLoginRoute = location.pathname.includes("login");
  // const loginPadding = isLoginRoute && "40px";
  return (
    <>
      <div style={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/1" element={<Home />} />
            {/* <Route path="/ans" element={<Ans />} /> */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/ans"
              element={
                <PrivateRoute>
                  <Ans />
                </PrivateRoute>
              }
            />
            {/* <Route
              path="/chatmedia/chat"
              element={
                <PrivateRoute>
                  <ChatMedia />
                </PrivateRoute>
              }
            />
            <Route
              path="/price"
              element={
                <PrivateRoute>
                  <Price />
                </PrivateRoute>
              }
            />
            <Route
              path="/plan"
              element={
                <PrivateRoute>
                  <Plan />
                </PrivateRoute>
              }
            /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
