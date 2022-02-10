import styled from "styled-components";

export const Cards= styled.div`
    background-color:white;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    box-shadow:0px 0px 1px gray;

    >h2{        
        text-align:center;
    }
    
    >div>p{
        font-style: italic;
    }
     
    >button{
         cursor:pointer;
         background-color: #7763BF;
         border: none;
         border-radius: 15px;
         padding: 5px;
         font-size: 15px;
         margin: 5px;
     }
    >button:hover{
        background-color: #A89AD9;
        color: white;
        transition: 400ms;
    }
`