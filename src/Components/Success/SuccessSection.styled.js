import styled from "styled-components";

export const Wrapper = styled.div`
  .container {
    padding-top: 60px;
    display: flex;
    /* gap: 20px; */
    flex-direction: column;
    align-items: center;
    background-image: url(/Images/background-img.jpg);
    filter: brightness(100%);
    background-size:  cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 760px;
    background-attachment: fixed;
    .ambitious {
      span {
        font-size: 17px;
        letter-spacing: 0.18em;
        font-weight: 500;
      }
    }
    .success {
      
      span {
        margin: 0;
        padding: 0;
        font-weight: 700;
        font-size: 110px;
        letter-spacing: 20px;
      }
    }
    .coaching {
      span {
        font-size: 23px;
        font-weight: 400;
        /* line-height: 40px; */
      }
    }
    .bookNow {
        padding: 20px 0px;
      button {
        width: 130px;
        height: 40px;
        border-radius: 0px;
        border-color: #000;
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
