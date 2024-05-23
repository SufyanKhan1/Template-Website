import React from "react";
// Import CSS file for styling (create a Card.css file in the same directory)
import styled from "styled-components";

const CustomCard = ({
  imageSrc,
  title,
  description,
  buttonLabel,
  uppertext,
  lowertext,
}) => {
  return (
    <Wrapper>
      <div className="card">
        {imageSrc}
        <div className="card-content">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>{title}</h3>
            <p>{description}</p>
            <hr />
            <p>{uppertext}</p>
            <p>{lowertext}</p>
          </div>
          <div className="btn-button">
            <a href="#" className="button">
              {buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CustomCard;
const Wrapper = styled.div`
  .card {
    /* padding: 30px 0px; */
    margin: 30px 0px;
    text-align: center;
    width: 300px;
    height: 399px;
    /* background-color: #fff; */
    border-radius: 5px;
    border: 8px solid #000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    .card img {
      width: 100%;
      height: auto;
      border-radius: 5px 5px 0 0;
    }
    .card-content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 25px;
    }

    .card-content h3 {
      margin-top: 0;
      font-size: 24px;
      font-weight: 800;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      /* line-height: 25px; */
      letter-spacing: 2px;
    }

    .card-content p {
      margin-bottom: 10px;
      font-size: 15px;
      font-weight: 400;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      /* line-height: 25px; */
      letter-spacing: 1px;
    }
    hr {
      width: 100%;
      border-bottom-style: solid;
    }
    .card-content .button {
      display: inline-block;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 3px;
      width: 80px;
      height: 20px;
      border-radius: 0px;
      background-color: #000;
      color: #fff;
      cursor: pointer;
      :hover {
            background-color: #fff;
            color: #000;
            border: 2px solid black;
          }
    }
  }
`;
