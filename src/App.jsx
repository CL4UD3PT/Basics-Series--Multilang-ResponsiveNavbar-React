import { Route, Routes } from "react-router-dom";
// import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

import "./App.css";
import { Navbar } from "./components/navbar";
import LandingPage from "./pages/LandingPage";

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
        <main>
            <Navbar/>
            <Routes>
                {ROUTES.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </main>
    );
}

export default App;
