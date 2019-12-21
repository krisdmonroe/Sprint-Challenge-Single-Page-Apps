import React from "react";
import styled from 'styled-components';

const Span = styled.span`
 display:flex
 flex-direction:column
 margin: 0 auto
 width: 50%
 background:grey
`;
export default function CharacterCard(props) {
return <Span>
<img src={props.image}/>
<h1>{props.name}</h1>
<p>{props.species}</p>
<p>{props.gender}</p>
</Span>;
}
