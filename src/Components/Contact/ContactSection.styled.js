import styled from "styled-components";

export const Wrapper = styled.div`
  .container {
    background: #57bbbf;
    padding: 40px 0px 100px 0px;
    .contact {
      padding: 10px 0px 30px 0px;
      label {
        font-size: 17px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 800;
        letter-spacing: 2px;
      }
    }
    .address {
      padding: 10px 0px;
    }
    .social-icons {
      ul {
        display: flex;
        padding: 0;
        margin: 0;
        gap: 20px;
        li {
          font-size: 20px;
          list-style-type: none;
        }
      }
    }

    .ant-form {
      padding: 20px 0px;
      label {
        font-size: 17px;
      }
      .ant-form-item {
        margin-bottom: 0px;
        textarea {
          resize: none;
        }
        .submit-btn {
          display: flex;
          justify-content: center;
          padding: 20px 0px;
        }
        button {
          display: flex;
          align-items: center;
          /* height: 35; */
          padding: 18px 30px;
          /* width: 142; */
          text-decoration: none;
          border-radius: 0px;
          background-color: #000;
          color: #fff;
          cursor: pointer;
          font-size: 16px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
          letter-spacing: 1px;
          :hover {
            background-color: #fff;
            color: #000;
            border: 2px solid black;
          }
        }
      }
      .ant-input {
        border: 2px solid #000;
        background: transparent;
        border-radius: 0px;
      }
      .ant-form-item-control-input-content {
        line-height: 40px;
      }
    }
  }
`;
