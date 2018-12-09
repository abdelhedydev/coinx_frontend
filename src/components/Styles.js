import styled from 'styled-components';

export const CONTAINER = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: ${(props) => props.theme.pt || '50px'};
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.width || '100%'};
`;

export const Img = styled.img`
  display: flex;
  width: ${(props) => props.theme.width || '250px'};
  height: ${(props) => props.theme.height || '250px'};
`;

export const VERTICALCONTAINER = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  justify-content: center;
  width: ${(props) => props.theme.width || '100%'};
`;

export const HEADER = styled.header`
  display: flex;
  position: fixed;
  flex-wrap: wrap;
  justify-content: left;
  width: 100%;
  background-color: #673AB7;
  text-align: center;
  margin-bottom: 1em;
  color: #333;
`;

export const H3 = styled.h3`
  display: inline-block;
  margin-left: 5px;
  color: white;
  &:hover{
    color:#40739e;
  }
`;

export const ITEM = styled.div`
  width: 15%;
  color: white;
  display: inline-block;
  text-align: center;
  border-right: 1px solid white;
  font-size: 10px;
  text-decoration: none;
  &:hover{
    color: #283593;
  }
`;

export const COLUMN = styled.div`
  padding-left: 15px;
  width: ${(props) => props.theme.width || '40%'};
`;

export const BUTTON = styled.button`
  background-color:#673AB7;
  border: none;
  width: ${(props) => props.theme.width || '100%'};
  border-radius: 2px;
  color: white;
  padding: 10px 25px;
  text-align: center;
  margin-top: ${(props) => props.theme.mt || '10px'};
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
  &:hover{
    background-color: #2980b9;
  }
  &:active{
    background-color: #2980b9;
  }
`;

export const BUTTONSUCCESS = styled.button`
    background-color: #2980b9;
    border: none;
    border-radius: 2px;
    color: white;
    padding: 10px 25px;
    margin-top: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    width: ${(props) => props.theme.width || '100%'};
    cursor: pointer;
`;

export const BUTTONDANGER = styled.button`
    background-color: red;
    border: none;
    border-radius: 2px;
    color: white;
    padding: 10px 25px;
    margin-top: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    width: ${(props) => props.theme.width || '100%'};
    cursor: pointer;
`;

export const PRODUCT = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 5px;
  box-shadow: 1px 15px 30px 1px rgba(128, 128, 128, 0.31);
  background: rgba(255, 255, 255, 0.90);
  text-align: left;
  border-radius: 5px;
`;

export const SPAN = styled.span`
  color: red;
`;

export const MODAL = styled.div`
position: fixed;
  box-shadow: 10px 30px 30px 10px rgba(128, 128, 128, 0.31);
  background-color: white;
  width: 30%;
  height: 20%;
  top: 35%;
  left: 33%;
  font-size: 20px;
  text-align: center;
  display: block;
`;

export const TABLE = styled.table`
  border: 1px solid #f5f5f5;
  border-radius: 2px;
  width: 100%;
  background: #f5f5f5;
`;
export const TH = styled.th`
  height: 10px;
  padding: 5px;
  text-align: left;
  background-color: #673AB7;
  font-size: 12px;
  color: white;
`;
export const Td = styled.td`
  height: 20px;
  padding: 8px;
  vertical-align: bottom;
  border-bottom: 1px solid #ddd;
`;
export const TR = styled.tr`
 height: 20px;
 &:hover {
  background-color: #bdc3c7;
 }
`;

export const INPUT = styled.input`
    width: ${(props) => props.theme.width || '80%'};
    height: ${(props) => props.theme.height || '20px'};
    padding: 5px 10px;
    margin: 8px 0;
    border-radius: 2px;
    background-color: #f8f8f8;
    border: 1px solid #ccc;
`;

export const LABEL = styled.label`

`;

export const TEXTAREA = styled.textarea`
  width: 82%;
  height: 80px;
  padding: 5px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: #f8f8f8;
  resize: none;
`;

export const DASHBOARDITEM = styled.div`
padding: 5px;
margin: 5px;
width: ${(props) => props.theme.width || '30%'};
overflow: hidden;
text-align: center;
`;

export const DASHBOARDCONTAINER = styled.div`
  display: flex;
  padding: 5px;
  margin: 5px;
  width: ${(props) => props.theme.width || '80%'};
  height: 50px;
  align-content: stretch;
  background: #F6F8FA;
  border-radius: 2px;
`;

export const DASHBOARDBUTTON = styled.button`
  flex-grow: 1;
  background-color: #673AB7;
  border: none;
  margin-left: 2px;
  border-radius: 2px;
  color: white;
  padding: 10px 25px;
  text-Decoration: none;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
`;

export const Warning = styled.div`
  width: 100%;
  text-align: center;
  margin: 10px 0px;
  padding:12px;
  font-size: 12px;
  color: #D8000C;
  background-color: #FFD2D2;
`;
