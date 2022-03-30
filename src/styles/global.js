import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    body {
      -webkit-font-smoothing: antialiased;
      background: #F7F9FA;
      color: #434F5B;
    }

    body, input, button {
      font: 16px Roboto, sans-serif;
    }

    
    button {
      cursor: pointer;
    }

    .modal-dialog {

      margin-top: 10% !important;
      
      .modal-content {
        border-radius: 10px;
      }
    }

`;
