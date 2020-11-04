import React from "react";
import { Container, Row, Col } from "react-grid-system";

class Body extends React.Component {
  render() {
    // const getData = (city) => {
    //   console.log("MyComponent -> getData -> city", city);
    //   // var city = "south-africa";
    //   fetch(
    //     `https://api.covid19api.com/dayone/country/${city}/status/confirmed`
    //   )
    //     .then((res) => res.json())
    //     .then(
    //       (result) => {
    //         console.log("MyComponent -> getData -> result", result);
    //         this.setState({
    //           isLoaded: true,
    //           items: result,
    //         });
    //       },
    //       (error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error,
    //         });
    //       }
    //     );
    // };
    var cardStyle = {
      background: "black",
      opacity: 0.4,
      color: "white",
      height: "400px",
      marginTop: "4rem",
    };
    var fontStyle = {
      fontSize:'35px',
    }

    let totalCases = {};
    totalCases = this.props.data;
    console.log("Body -> render -> state", totalCases);
    return (
      <div style={cardStyle}>
        <Container>
          <Row>
            <Col size={4}></Col>
            {totalCases ? (
              <Col size={4}>
                <span style={fontStyle}>
                  <label>Active</label>
                  <br />
                  <label>{totalCases.Active}</label>
                </span>
                <br />
                <span style={fontStyle}>
                  <label>Confirmed</label>
                  <br />
                  <label>{totalCases.Confirmed}</label>
                </span>
                <br />
                <span style={fontStyle}>
                  <label>Deaths</label>
                  <br />
                  <label>{totalCases.Deaths}</label>
                </span>
                <br />
                <span style={fontStyle}>
                  <label>Recovered</label>
                  <br />
                  <label>{totalCases.Recovered}</label>
                </span>
              </Col>
            ) : (
              <Col>
                {" "}
                <label>No data</label>
              </Col>
            )}
            <Col size={4}></Col>
          </Row>
        </Container>
      </div>
    );
    // return (
    //   <div>
    //     <Container>
    //       <Row>
    //         <Col size={8}>
    //           <select name="countries" id="countries">
    //             {state.map((i) => {
    //               return <option>{i.Country}</option>;
    //             })}
    //           </select>
    //         </Col>
    //         <Col size={4}>
    //           <input
    //             type="button"
    //             id="submit"
    //             name="submit"
    //             value="submit"
    //             onClick={() =>
    //               getData(
    //                 document.getElementById("countries") &&
    //                   document.getElementById("countries").value
    //               )
    //             }
    //           />
    //         </Col>
    //       </Row>
    //     </Container>

    //     <Container>
    //       <Row>
    //         {this.state && this.state.items && this.state.items.length > 0 && (
    //           <ul>
    //             {this.state.items.map((i) => {
    //               return (
    //                 <li>
    //                   Cases : {i.Cases}, Country : {i.Country}
    //                 </li>
    //               );
    //             })}
    //           </ul>
    //         )}
    //       </Row>
    //     </Container>
    //   </div>
    // );
  }
}

export default Body;
