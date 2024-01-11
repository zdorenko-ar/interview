import React from 'react'
import {RowStyled} from "./row.style";


export const Row = ({ name, age, onClick }): React.ReactElement => (
    <RowStyled onClick={() => onClick({ name, age })}>
        <td>{name}</td>
        <td>{age}</td>
    </RowStyled>
)
