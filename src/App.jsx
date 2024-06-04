import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import PrivateRoute from "./routes/PrivateRoute";
import ReportDisplay from "./components/ReportDisplay";
import { ANS_REPORT_URL, BPEX_REPORT_URL, IBIZ_REPORT_URL, KOL_ENGAGEMENT_REPORT_URL, MARKET_LANDSCAPE_REPORT_URL, SALES_REPORT_URL, TARGET_COVERAGE_REPORT_URL } from "./constants/ReportUrl";

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
                  <ReportDisplay reportUrl={ANS_REPORT_URL} />
                </PrivateRoute>
              }
            />
            <Route
              path="/ibiz"
              element={
                <PrivateRoute>
                  <ReportDisplay reportUrl={IBIZ_REPORT_URL} />
                </PrivateRoute>
              }
            />
            <Route
              path="/sales-report"
              element={
                <PrivateRoute>
                  <ReportDisplay reportUrl={SALES_REPORT_URL} />
                </PrivateRoute>
              }
            />
            <Route
              path="/bpex"
              element={
                <PrivateRoute>
                  <ReportDisplay reportUrl={BPEX_REPORT_URL} />
                </PrivateRoute>
              }
            />
            <Route
              path="/target-coverage"
              element={
                <PrivateRoute>
                  <ReportDisplay reportUrl={TARGET_COVERAGE_REPORT_URL} />
                </PrivateRoute>
              }
            />
            <Route
              path="/market-landscape"
              element={
                <PrivateRoute>
                  <ReportDisplay reportUrl={MARKET_LANDSCAPE_REPORT_URL} />
                </PrivateRoute>
              }
            />
            <Route
              path="/kol-engagement"
              element={
                <PrivateRoute>
                  <ReportDisplay reportUrl={KOL_ENGAGEMENT_REPORT_URL} />
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
