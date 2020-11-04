import { Col, Row } from "antd";
import react from "react";
import { Container } from "react-grid-system";

export default class Total extends react.Component {
  render() {
    var data = this.props.data;
    return (
      <div>
        <Container>
          <Row>
            <Col size={4}></Col>
            <Col size={4}>
              <label>TotalConfirmed:</label>
              <label>{data.TotalConfirmed}</label>
              <label>TotalDeaths:</label>
              <label>{data.TotalDeaths}</label>
              <label>TotalRecovered:</label>
              <label>{data.TotalRecovered}</label>
            </Col>
            <Col size={4}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
