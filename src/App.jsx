import { Route, Routes } from "react-router-dom";
// import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

import "./App.css";
import { Navbar } from "./components/navbar";
import LandingPage from "./pages/LandingPage";
import styled from "styled-components";

const Main = styled.main`
    position: relative;
`;

function App() {
    const ROUTES = [
        {
            path: "/",
            element: <LandingPage />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ];

    return (
        <Main>
            <Navbar />
            <Routes>
                {ROUTES.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Main>
    );
}

export default App;
