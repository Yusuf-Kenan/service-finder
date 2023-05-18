import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Row, Col } from "react-bootstrap";
import CategoryBox from "./categoryBox";
import { useSelector } from 'react-redux';

const MainPage = () => {
  const categoriesState=useSelector(state=>state.categoriesState)
 

  if (!categoriesState.initialized)
    return (
      <main>
        <Row className="mb-3 text-center">
          <h1>Loading...</h1>
        </Row>
      </main>
    );
  return (
    <main>
      <Row className="mb-3 text-center">
        <Col>
          <Splide
            options={{
              rewind: true,
              gap: "1rem",
            }}
            aria-label="My Favorite imgs"
          >
            <SplideSlide>
              <img src="https://picsum.photos/900/350" alt="img 1" />
            </SplideSlide>
            <SplideSlide>
              <img
                src="https://picsum.photos/seed/picsum/900/350"
                alt="img 2"
              />
            </SplideSlide>
            <SplideSlide>
              <img src="https://picsum.photos/id/23/900/350" alt="img 3" />
            </SplideSlide>
          </Splide>
        </Col>
      </Row>

      <Row className="row-cols-1 row-cols-md-3 mb-3 text-center">
        {categoriesState.categories.map((item, index) => {
          return (
            <Col key={index}>
              <CategoryBox category={item} />
            </Col>
          );
        })}
      </Row>

      <h2 className="display-6 text-center mb-4">Compare plans</h2>

      <div className="table-responsive">
        <table className="table text-center">
          <thead>
            <tr>
              <th style={{ width: "34%" }}></th>
              <th style={{ width: "22%" }}>Free</th>
              <th style={{ width: "22%" }}>Pro</th>
              <th style={{ width: "22%" }}>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Public
              </th>
              <td>
                <svg className="bi" width="24" height="24"></svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24"></svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24"></svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Private
              </th>
              <td></td>
              <td>
                <svg className="bi" width="24" height="24"></svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24"></svg>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Permissions
              </th>
              <td>
                <svg className="bi" width="24" height="24"></svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24"></svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24"></svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Sharing
              </th>
              <td></td>
              <td>
                <svg className="bi" width="24" height="24"></svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24"></svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Unlimited members
              </th>
              <td></td>
              <td>
                <svg className="bi" width="24" height="24"></svg>
              </td>
              <td>
                <svg className="bi" width="24" height="24"></svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Extra security
              </th>
              <td></td>
              <td></td>
              <td>
                <svg className="bi" width="24" height="24"></svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default MainPage;
