import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  transition: color, background 1s ease 0s, transform 1s ease 0s;
  color: ${props => props.theme.colors.text};
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;
