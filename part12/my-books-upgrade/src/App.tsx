import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Signin from "./pages/Signin";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import { ErrorBoundary } from "react-error-boundary";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";

function App() {
    return (
        <ErrorBoundary FallbackComponent={Error}>
            <BrowserRouter>
                <Routes>
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/book/:id" element={<Detail />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/" element={<Home />} />
                    <Route element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
