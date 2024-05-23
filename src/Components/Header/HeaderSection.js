import { Button, Col, Row } from "antd";
import { Wrapper } from "./HeaderSection.styled";
import { UserOutlined } from "@ant-design/icons";
import { User } from "../DummyData";
const HeaderSection = () => {
  return (
    <Wrapper>
      {/* <Row>
        <div className="container">
          <div className="header">
            <Col >
              <div className="left">
                <div className="johnson">
                  <span>ALLAN JOHNSON</span>
                </div>
                <div className="coach">
                  <span>Personal Life Coach</span>
                </div>
              </div>
            </Col>
            <Col >
              <div className="right">
                <div className="navigation">
                  <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Plans</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>
                      <Button icon={<UserOutlined />}>Log In</Button>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </Row> */}
      <div className="container">
        <Row style={{ padding: "40px" }}>
          <Col span={8}>
            <div className="left">
              <div className="johnson">
                <span>ALLAN JOHNSON</span>
              </div>
              <div className="coach">
                <span>Personal Life Coach</span>
              </div>
            </div>
          </Col>
          <Col span={16}>
            <div className="right">
              <div className="navigation">
                <ul>
                  <li>About</li>
                  <li>Services</li>
                  <li>Plans</li>
                  <li>About</li>
                  <li>Blog</li>
                  <li>Contact</li>
                  <li>
                    <Button icon={User}>Log In</Button>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default HeaderSection;
