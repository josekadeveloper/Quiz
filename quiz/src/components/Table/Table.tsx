import React from 'react';
import './table.scss'

interface TableProps {
    highScores: Array<{ name: string, score: number }>;
}

const Table: React.FC<TableProps> = ({ highScores }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Ranking</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {highScores?.map((highScore, i) => {
                    return (
                        <tr key={`${highScore?.score}${highScore?.name}${i}`}>
                            <td>{i + 1}</td>
                            <td>{highScore?.name}</td>
                            <td>{highScore?.score}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default Table;