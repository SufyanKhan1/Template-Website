import { Button, Col, Row } from "antd";
import { Wrapper } from "./SuccessSection.styled";

const SuccessSection = () => {
  return (
    <Wrapper>
      <Row style={{ paddingTop: "135px" }}>
        <Col span={24}>
          <div className="container">
            <div className="ambitious">
              <span>AMBITION IS THE FIRST STEP TOWARDS</span>
            </div>
            <div className="success">
              <span>SUCCESS</span>
            </div>
            <div className="coaching">
              <span>Now Available for Online Coaching</span>
            </div>
            <div className="bookNow">
              <Button>Book Now</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default SuccessSection;
