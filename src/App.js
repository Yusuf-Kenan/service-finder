import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componenets/header/header";
import Footer from "./footer/footer";
import MainPage from "./pages/mainpage/mainPage";
import CategoryDetails from "./pages/categoryDetails/categoryDetails";
import Categories from "./pages/categories/categories";

function App() {
  return (
    <BrowserRouter>
      <div className="container py-3">
        <Header />

        <Routes>
          <Route index element={<MainPage />} />
          <Route path="categories">
            <Route index element={<Categories />} />
            <Route path=":slug" element={<CategoryDetails />} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
