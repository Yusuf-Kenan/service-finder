import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ServicesBox(service) {
  return (
    <Card className="mb-4 rounded-3 shadow-sm border-primary">
      <Card.Header className="py-3 text-bg-primary border-primary">
        <h4 className="my-0 fw-normal">{service.name}</h4>
      </Card.Header>
      <Card.Body>
        <img
          src="https://picsum.photos/200/300"
          alt="img card"
          className="mb-3"
          style={{
            width: "100%",
            aspectRatio: "1.3",
            margin: "0px 0px 20px 0px",
          }}
        />
        <Link
          to={"/services/" + service.slug}
          className="w-100 btn btn-primary"
        >
          Details
        </Link>
      </Card.Body>
    </Card>
  );
}
