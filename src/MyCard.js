import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaPhone, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const MyCard = ({ details }) => {
   
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height={150}
          width={150}
          className="rounded-circle border-danger img-thumbnail"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h1 className="pt-4">
            <span> {details.name?.title} </span>
            <span> {details.name?.first} </span>
            <span> {details.name?.last} </span>
          </h1>
        </CardTitle>
        <div>
          <FaMapMarkedAlt />
          <span style={{ paddingLeft: "10px" }}>
            
            {details.location?.street?.number}
            <span> {details.location?.street?.name} </span>
          </span>
          <div>
            <FaPhone />
            <span style={{ paddingLeft: "10px" }}>{details.phone}</span>
          </div>
          <div>
            <FaEnvelope />
            <span style={{ fontSize: "25px", paddingLeft : "5px" }}> {details.email} </span>
          </div>

          <div>
            <span style={{ color : "blue", fontWeight: "600"}}> Age: {details.dob?.age} </span>
            {/* <span style={{ color : "blue", fontWeight: "600"}}> DOB: {details.formattedDate}
              </span> */}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default MyCard;
