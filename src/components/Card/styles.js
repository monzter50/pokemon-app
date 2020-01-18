/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius:.3em;
  display: grid;
  padding: .8em .5em;
  display:flex;
  position: relative;
  justify-content:space-around;
  overflow: hidden;
  position:relative;
`;
export const Avatar = styled.img`
  height: auto;
  overflow: hidden;
  object-fit: contain;
  height: 100px;
  width: 100px;
`;
export const Description = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.button`
    display: inline-block;
    position: relative;
    line-height: 2em;
    border-radius: .3em;
    border: none;
    margin: 0;
    white-space: nowrap;
    cursor: pointer;
    font-size: 1em;
    color:${(props) => (props.primary ? 'white' : '#680ceb')};
    background: ${(props) => (props.primary ? '#680ceb' : 'transparent')};;
    a{
      color:${(props) => (props.primary ? 'white' : '#680ceb')};
      text-decoration: none;
    }
  & svg {
    margin-right: 4px;
  }
`;
