import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemesPalette, themesPalette } from "./theme_config";
import React from "react";

//Components
import NavBar from "./components/NavBar";

//Styles
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { HonoraisContextInterface } from "./utils/datatypes";
import { ToastContainer } from "react-toastify";
import { RootLayout } from "./pages/pages/styles/root";
import Footer from "./components/Footer";
import Home from "./pages/pages/home";
import Team from "./pages/pages/team";
import Lore from "./pages/pages/lore";
import GameFi from "./pages/pages/gamefi";
import Roadmap from "./pages/pages/roadmap";

export const HonoraisContext = createContext({
  themeContext: { theme: "dark" as keyof ThemesPalette },
  switchTheme: () => {},
});

function App() {
  const [themeContext, setThemeContext] = useState({
    theme: "dark" as keyof ThemesPalette,
  } as HonoraisContextInterface);

  // Function to update the context value
  const switchTheme = () => {
    const newTheme: HonoraisContextInterface = {
      theme: themeContext.theme === "dark" ? "light" : "dark",
    };
    setThemeContext(newTheme);
    window.localStorage.setItem(
      "ho-theme-preference",
      JSON.stringify(newTheme)
    );
  };

  //Load window context if present
  useEffect(() => {
    const theme_preference = window.localStorage.getItem("ho-theme-preference");
    if (theme_preference) {
      setThemeContext(JSON.parse(theme_preference));
    }
  }, []);

  useEffect(() => {
    document.getElementById("root")!.style.backgroundColor =
      themesPalette[themeContext.theme].bg.Main;
  }, [themeContext]);

  return (
    <HonoraisContext.Provider value={{ themeContext, switchTheme }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <BrowserRouter>
        <RootLayout id="root-component" current_theme={themeContext.theme}>
          <NavBar></NavBar>
          <Routes>
            <Route path="/">
              <Route path="" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/lore" element={<Lore />} />
              <Route path="/gamefi" element={<GameFi />} />
              <Route path="/roadmap" element={<Roadmap />} />
            </Route>
          </Routes>
          <Footer></Footer>
        </RootLayout>
      </BrowserRouter>
    </HonoraisContext.Provider>
  );
}

export default App;
