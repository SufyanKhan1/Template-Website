import styled from "styled-components";

export const Wrapper = styled.div`
  .container {
    padding: 2px 28px 10px;
    /* .line {
      width: 40px;
      height: 15px;
      border-bottom: 1px solid;
    } */
    .top-col {
      padding-top: 40px;
      .spacing {
        /* margin: 0px 0px 64px calc((100% - 490px) * 1); */

        display: flex;
        justify-content: center;
        .text {
          p {
            text-align: justify;
            font-size: 15px;
            font-weight: 400;
            letter-spacing: 0.02em;
            line-height: 30px;
          }
        }
      }
      .about-me {
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
    }

    .read-more {
      padding: 40px 0px;
      button {
        width: 130px;
        height: 40px;
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
  }
`;
