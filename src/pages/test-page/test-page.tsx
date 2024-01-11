import React, {useState} from 'react';
import { TestPageStyled } from './test-page.style';
import { Row } from "./row";

type TData = {
    name: string,
    age?: number
}


export const TestPage = (): React.ReactElement => {
    const [getI, setI] = useState<TData | null>(null)

    const data: Array<TData> = [
        { name: 'foo', age: 5 },
        { name: 'bar', age: 9 },
        { name: 'baz' },
    ]

    const [getD, setD] = useState<Array<TData>>(data)

    const rowClick = (rowData: TData) => {
        setI(rowData)
    }

    const btnClick = () => {
        setD([...getD, {
            name: (Math.random() + 1).toString(36).substring(7),
            age: Math.floor(Math.random() * 100)
        }])
    }

    return (
        <>
            <TestPageStyled>
                <table width="100%">
                    {getD.map((item) => <Row {...item} onClick={rowClick} />)}
                </table>
            </TestPageStyled>

            <button style={{
                borderRadius: '5px',
                border: '1px solid green',
                width: '150px'
            }} onClick={btnClick}>
                Добавить строку
            </button>

            <div>
                Num of all rows: {data.length}
                <br />
                Current row data: {JSON.stringify(getI)}
            </div>
        </>
    );
};
