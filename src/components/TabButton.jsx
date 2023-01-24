import styled from "styled-components";

const TabButton = styled.button`
  margin: 7px ${props => (props.selected ? "15" : "7")}px;
  background-color: ${props => props.selected ? "#1B98E0" : "#E8F1F2"};
  color: ${props => props.selected ? "#E8F1F2" : "#1B98E0"};
  padding: 15px 20px;
  border-style: none;
  border-radius: 20px;
  font-size: 1rem;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  font-weight: bold;
`;

export default TabButton;