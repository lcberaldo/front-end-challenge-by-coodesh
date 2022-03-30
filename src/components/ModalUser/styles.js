import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  position: relative;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
    top: -100px;
    position: relative;
    margin-bottom: -100px;
  }

  .infos {
    margin-top: 40px;
    text-align: center;

    span {
      display: block;

      & + span {
        margin-top: 10px;
      }
    }

    .share {
      padding: 8px 15px;
      background: #0b5ed7;
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      color: white;
      margin: 0 auto;
      text-decoration: none;
      font-weight: 500;
      border-radius: 5px;
      margin-top: 30px !important;
      transition: all 0.5s ease-in-out;

      &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
      }

      svg {
        margin-left: 10px;
      }
    }
  }

  .btn {
    background: none;
    position: absolute;
    right: -5px;
    top: 0px;
    border: none;
    outline: none;
    transition: all 0.2s ease-in-out;
    color: #0b5ed7;

    &:hover {
      transform: scale(1.05);
      transition: all 0.2s ease-in-out;
    }
  }
`;
