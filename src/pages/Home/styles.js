import styled from "styled-components";

export const Header = styled.div`
  height: 70px;
  background: #fff;
  padding: 0 20px;

  .user {
    background: #dfe6ed;
    padding: 10px 12px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const List = styled.div`
  max-width: 900px;
  margin: 50px auto 0 auto;
  padding: 0 15px;

  p {
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 0;

    &:last-of-type {
      margin-bottom: 40px;
    }
  }

  .list-header {
    width: 100%;

    form {
      display: flex;
      align-items: center;
      background: #fff;
      padding-right: 10px;

      input {
        flex: 1;
        border: none;
        outline: 0;
        padding: 10px;
        background: none;
      }

      button {
        background: none;
        border: none;
        outline: 0;
      }
    }
  }

  table {
    margin-top: 40px;
    border: 2px solid #9aa9b7;
    width: 100%;

    .titles {
      border: 2px solid #9aa9b7;
      background: #c3cfd9;
      text-align: center;

      th {
        padding: 7px;
        border: 2px solid #9aa9b7;

        &.name {
          width: 320px;
        }

        .dropdown button {
          background: none;
          color: #434f5b;
          border: 0;
          font-weight: bold;
          outline: 0;

          &:focus {
            box-shadow: none;
          }
        }
      }
    }

    .pacients {
      text-align: center;

      td {
        padding: 7px;
        border: 2px solid #9aa9b7;
        &.name {
          width: 220px;
        }

        button {
          background: none;
          border: none;
        }
      }
    }
  }

  .load-more {
    display: block;
    margin: 40px auto;
    padding: 10px 20px;
    background: #1763ad;
    color: white;
    border-radius: 20px;
    border: none;
    outline: none;
  }
`;
