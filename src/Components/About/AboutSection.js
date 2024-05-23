import { Button, Col, Row } from "antd";
import { Wrapper } from "./AboutSection.styled";

const AboutSection = () => {
  return (
    <Wrapper>
      <Col xs={24} lg={24} className="container">
        <Row>
          <Col span={24}>
            <Row gutter={[20, 20]}>
              {/* <div
                style={{
                  border: "1px solid",
                  width: "40px",
                  height: "0px",
                  position: "relative",
                  top:"20px",
                  left: "214px",
                  // margin: "68px 0px 25px calc((100% - 490px) * 1)",
                }}
              ></div> */}
              <Col xs={24} sm={24} md={12} lg={12} className="top-col">
                <Row gutter={[10, 10]} className="spacing">
                  <Col xs={24} sm={24} md={14} lg={14}>
                    <Row>
                      <Col span={4} className="about-me">
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
                        <label>ABOUT ME</label>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={24} sm={24} md={14} lg={14}>
                    <Row>
                      <Col span={22} className="text">
                        <p>
                          I'm a paragraph. Click here to add your own text and
                          edit me. It’s easy. Just click “Edit Text” or double
                          click me to add your own content and make changes to
                          the font. Feel free to drag and drop me anywhere you
                          like on your page. ​
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} sm={24} md={14} lg={14}>
                    <Row>
                      <Col span={22} className="text">
                        <p>
                          This is a great space to write long text about your
                          company and your services. You can use this space to
                          go into a little more detail about your company. Talk
                          about your team and what services you provide.
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={24} sm={24} md={14} lg={14}>
                    <Row>
                      <Col>
                        <div className="read-more">
                          <Button>Read More</Button>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12}>
                <Row gutter={[10, 10]}>
                  <Col xs={24} sm={24} md={24} lg={24}>
                    <Row>
                      <Col>
                        <img
                          src="/Images/about-img.jpg"
                          alt="my-img"
                          width="100%"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};

export default AboutSection;
