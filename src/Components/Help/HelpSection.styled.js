import styled from "styled-components";

export const Wrapper = styled.div`
  
  .top-col {
    /* background-color: #e0e0ff; */
    background-image: url(/Images/cloud.png);
    background-size:  cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding-top: 40px;
    .spacing {
      display: flex;
      justify-content: center;
    }
    .help {
      padding-top: 40px;
      label {
        font-size: 42px;
        font-weight: 800;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
        line-height: 45px;
        letter-spacing: 5px;
      }
    }
    .more-services {
      /* padding: 20px 0px; */
      padding-top: 40px;
      padding-bottom: 100px;
      display: flex;
      justify-content: center;
      button {
        height: 43px;
        width: 170px;
        text-decoration: none;
        border-radius: 0px;
        background-color: #000;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        font-weight: 400;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
        letter-spacing: 1px;
        :hover{
          background-color: #fff;
          color: #000;
          border: 2px solid black;
        }
      }
    }
  }
`;
