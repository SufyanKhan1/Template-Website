import { Button, Card, Col, Row } from "antd";
import { Wrapper } from "./HelpSection.styled";
import CustomCard from "../Common/CustomCard";

const HelpSection = () => {
  const columnData = [
    {
      id: 1,
      title: "ONLINE COACHING",
      description: "Use this area to describe one of your services.",
      duration: "1 hr",
      price: "$70",
    },
    {
      id: 2,
      title: "ANOTHER SERVICE",
      description: "Use this area to describe one of your services.",
      duration: "2 hrs",
      price: "$100",
    },
    {
      id: 3,
      title: "YET ANOTHER SERVICE",
      description: "Use this area to describe one of your services.",
      duration: "30 mins",
      price: "$50",
    },
    // { id: 4, title: "FINAL SERVICE", duration: "45 mins", price: "$60" },
  ];
  return (
    <Wrapper>
      {/* <div className="container">
        <Row>
          <Col span={24}>
            <Row>
              {" "}
              <Col xs={8} sm={8} md={8} lg={4} className="help">
                <div>
                  <span>HOW I CAN HELP YOU</span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[0, 10]}>
              <Col xs={24} sm={24} md={24} lg={24}>
                <Row className="card-container">
                  <Col xs={8} sm={8} md={8} lg={4} className="card">
                    <Card title="ONLINE COACHING" style={{}}>
                      <p>Use this area to describe one of your services.</p>
                      <div
                        style={{
                          height: "1px",
                          borderBottom: "1px solid #000",
                        }}
                      ></div>
                      <div className="card-content">
                        <p>1 hr</p>
                        <p>$70</p>
                        <Button>Book It</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={4} className="card">
                    <Card title="ONLINE COACHING" style={{}}>
                      <p>Use this area to describe one of your services.</p>
                      <div
                        style={{
                          height: "1px",
                          borderBottom: "1px solid #000",
                        }}
                      ></div>
                      <div className="card-content">
                        <p>1 hr</p>
                        <p>$70</p>
                        <Button>Book It</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={4} className="card">
                    <Card title="ONLINE COACHING" style={{}}>
                      <p>Use this area to describe one of your services.</p>
                      <div
                        style={{
                          height: "1px",
                          borderBottom: "1px solid #000",
                        }}
                      ></div>
                      <div className="card-content">
                        <p>1 hr</p>
                        <p>$70</p>
                        <Button>Book It</Button>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <div style={{ display: "flex", gap: "150px", padding: "0px 140px" ,height:"385px"}}>
            <div
              style={{
                border: "7px solid #000",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>
                <span>ONLINE COACHING</span>
              </div>
              <div>
                <p>Use this area to describe one of your services.</p>
              </div>
              <div
                style={{
                  width: "90%",
                  height: "1px",
                  borderBottom: "1px solid #000",
                }}
              ></div>
              <div>
                <p>1 hr</p>
                <p>1 hr</p>
              </div>
            </div>
            <div style={{ border: "7px solid #000" }}></div>
            <div style={{ border: "7px solid #000" }}></div>
          </div>
        </Row>
      </div> */}

      <Col xs={24} sm={24} md={12} lg={24} className="top-col">
        <Row gutter={[10, 10]} className="spacing">
          <Col xs={24} sm={24} md={14} lg={14}>
            <Row>
              <Col span={10} className="help">
                <div
                  style={{
                    border: "1px solid",
                    width: "40px",
                    height: "0px",
                    position: "relative",
                    top: "-30px",
                    left: "0px",
                    // margin: "68px 0px 25px calc((100% - 490px) * 1)",
                  }}
                ></div>
                <label>HOW I CAN HELP YOU</label>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          justify={"center"}
          gutter={[, 16]}
          style={{ padding: "5px 28px 10px 28px" }}
        >
          {columnData.map((item) => (
            <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
              <CustomCard
                imageSrc={item.icon}
                title={item.title}
                description={item.description}
                uppertext={item.duration}
                lowertext={item.price}
                buttonLabel="Book It"
              />
            </Col>
          ))}
        </Row>
        <Col className="more-services">
          <Button>More services</Button>
        </Col>
      </Col>
    </Wrapper>
  );
};

export default HelpSection;
