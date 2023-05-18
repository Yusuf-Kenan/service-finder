import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componenets/header/header";
import Footer from "./footer/footer";
import MainPage from "./pages/mainpage/mainPage";
import CategoryDetails from "./pages/categoryDetails/categoryDetails";
import Categories from "./pages/categories/categories";
import { useDispatch, useSelector } from "react-redux";
import useApi from "./hooks/useApi";
import { SET_CATEGORIES } from "./redux/reducers/categoriesReducer";

function App() {
  const dispatch = useDispatch();
  const api = useApi();
  const categoriesState = useSelector((state) => state.categoriesState);
  console.log(categoriesState);

  if (!categoriesState.initialized) {
    api
      .get("public/categories/listMainCategories")
      .then((res) => {
        dispatch({
          type: SET_CATEGORIES,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        alert(err.data);
      });
  }
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
