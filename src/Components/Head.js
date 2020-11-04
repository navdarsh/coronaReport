import React from "react";
import { Container, Row, Col } from "react-grid-system";

export default class Head extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     items: [],
  //   };
  // }

  // componentDidMount() {
  //   var city = "south-africa";
  //   fetch(`https://api.covid19api.com/dayone/country/${city}/status/confirmed`)
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result,
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error,
  //         });
  //       }
  //     );
  // }

  render() {
    var style = {
      headerStyle: {
        background: "darkcyan",
        opacity: 0.4,
      },
    };

    var data = this.props.data;
    return (
      <div style={style.headerStyle}>
        <Container>
          <Row>
            <Col size={4}></Col>
            <Col size={4}>
              <h1 style={{ margin: 0 }}>{data.title}</h1>
            </Col>
            <Col size={4}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
