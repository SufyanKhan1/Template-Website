import styled from "styled-components";

export const Wrapper = styled.div`
  /* .container {
    padding: 20px;
    .header {
      display: flex;
      align-items: center;
    }
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .johnson {
        font-family: Quicksand;
        font-size: 18px;
      }
      .coach {
        font-family: sans-serif;
        font-size: 14px;
        font-weight: 100px;
      }
    }

    .right {
      display: flex;
      .navigation {
        ul {
          display: flex;
          align-items: center;
          list-style-type: none;
          gap: 15px;
          li {
            button {
              color: green;
              border: none;
            }
          }
        }
      }
    }
  } */
  .container {
    position: fixed;
    z-index: 1;
    background: #fff;
    width: 100%;
    .left {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-end;
      .johnson {
        cursor: pointer;
        font-weight: 800;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
        font-size: 18px;
        letter-spacing: 4px;
      }
      .coach {
        cursor: pointer;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
        letter-spacing: 2px;
        font-size: 14px;
        padding-right: 25px;
        font-weight: 100px;
        line-height: 40px;
      }
    }
    .right {
      .navigation {
        ul {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          padding-right: 0px;
          li {
            cursor: pointer;
            font-size: 15px;
            list-style-type: none;
            font-family: system-ui, -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
              "Helvetica Neue", sans-serif;
            :hover {
              color: green;
            }
            button {
              color: green;
              border: none;
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }
`;
