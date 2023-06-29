import React , {useState , useEffect} from "react";
import { Container, Row , Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import MyCard from "./MyCard";

import Axios from "axios";


function App() {
const [details , setDetails]= useState({});
const fetchData = async () =>{
   const response = await Axios.get("https://randomuser.me/api/");
   const data = await response.data;
   console.log(data);

  //  const date = await response.data.dob.date ;
  //  console.log(date);

   const details = data.results[0];
   setDetails(details);
}

useEffect(() => {
fetchData();
}, []);

  return (
    <Container fluid className="p-4 App">
      <Row >
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details = {details} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
