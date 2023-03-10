import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./components/NotFound";
import { Post } from "./components/Post";
import { SinglePost } from "./components/SinglePost";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
            </>
          }
          exact
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Navbar />
              <Post />
            </>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <>
              <Navbar />
              <SinglePost />
            </>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
