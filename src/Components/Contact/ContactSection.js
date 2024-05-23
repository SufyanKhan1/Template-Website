import { Button, Col, Form, Input, Row } from "antd";
import { Wrapper } from "./ContactSection.styled";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const ContactSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <Col span={24} style={{ padding: "5px 28px 10px 28px" }}>
          <Row gutter={[20, 20]}>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Row gutter={[10, 10]}>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <Col span={10} className="contact">
                    <div
                      style={{
                        border: "1px solid",
                        width: "30px",
                        height: "0px",
                        position: "relative",
                        top: "-20px",
                        left: "0px",
                      }}
                    ></div>
                    <label>Contact</label>
                  </Col>

                  <Col>
                    <p>500 Terry Francine Street,</p>
                    <p> San Francisco, CA 94158</p>
                  </Col>

                  <Col span={24} className="address">
                    <p>Tel: 123-456-7890</p>
                    <p>Fax: 123-456-7890</p>
                  </Col>

                  <Col>
                    <p>info@mysite.com</p>
                  </Col>

                  <Col className="social-icons">
                    <ul>
                      <li>
                        <FacebookOutlined />
                      </li>
                      <li>
                        <TwitterOutlined />
                      </li>
                      <li>
                        <InstagramOutlined />
                      </li>
                      <li>
                        <YoutubeOutlined />
                      </li>
                    </ul>{" "}
                  </Col>

                  <Col span={24} className="address">
                    <p>© 2035 by Personal Life Coach.</p>
                    <span>Powered and secured by Wix</span>
                  </Col>
                </Col>
              </Row>
            </Col>
            {/* 2nd coulumn  */}
            <Col xs={24} sm={24} md={12} lg={12}>
              <Row gutter={[10, 10]}>
                <Col span={16}>
                  <Form name="basic" autoComplete="off">
                    <Row gutter={[10, 10]}>
                      <Col span={24}>
                        <Form.Item>
                          <label>Enter Your Name</label>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item>
                          <label>Enter Your Email</label>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item>
                          <label>Enter Your Subject</label>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item>
                          <label>Message</label>
                          <TextArea/>
                        </Form.Item>
                      </Col>
                      <Col span={24} className="submit-btn">
                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            style={{ float: "right" }}
                          >
                            Submit
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
      {/* <div style={{height:"10vh",background:"#fff",position:"fixed",bottom:"0px",width:"100%"}} className="footer"></div> */}
    </Wrapper>
  );
};

export default ContactSection;
