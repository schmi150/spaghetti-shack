import React from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

function Locations() {
  const locations = [
    {
      City: "Tempe, AZ",
      Address: "6340 S Rural Rd, Suite 114",
      Phone: "(480)687-2485",
      Hours: "Mon-Sun: 11AM - 9PM",
    },
    {
      City: "Pinetop-Lakeside, AZ",
      Address: "592 W White Mountain Blvd",
      Phone: "(928)358-1171",
      Hours: "Mon-Sun: 3PM-8PM",
    },
  ];

  return (
    <div>
      <h1>Sphagetti Shack Locations!!</h1>

      {locations.map((loc, i) => {
        return (
          <div className="d-flex justify-content-center">
            <Accordion style={{ width: "350px", padding: "10px" }}>
              <Accordion.Item eventKey={i}>
                <Accordion.Header>{loc.City}</Accordion.Header>
                <Accordion.Body>{loc.Address}</Accordion.Body>
                <Accordion.Body>{loc.Phone}</Accordion.Body>
                <Accordion.Body>{loc.Hours}</Accordion.Body>
                <Accordion.Body>
                  <Button as={Link} to="/menu">
                    Order Online
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
}

export default Locations;
