import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import ServicesBox from "./components/servicesBox";

const CategoryDetails = () => {
  const [categoryDetails, setCategoryDetails] = useState();
  const [initialized, setInitialized] = useState(false);
  const api = useApi();
  const params = useParams();
  useEffect(() => {
    api
      .get("/public/categories/getBySlug/" + params.slug)
      .then((res) => {
        setCategoryDetails(res.data.data);
      })
      .catch((err) => {})
      .finally(() => {
        setInitialized(true);
      });
  }, [params.slug]);

  if (!initialized) {
    return (
      <Row className="mb-3 text-center">
        <h1>Loading</h1>
      </Row>
    );
  }
  return (
    <Row className="mb-3 ">
      <Col lg={12} sm={12} className="text-center">
        <h1>{categoryDetails.category.name}</h1>
      </Col>
      {categoryDetails.services.map((item, index) => {
        return (
          <Col key={index} lg={3} sm={6} xs={12}>
           <ServicesBox service={item}/>
          </Col>
        );
      })}
    </Row>
  );
};

export default CategoryDetails;
