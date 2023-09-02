import styled from 'styled-components';

export const StatisticsSection = styled.section`
    background-color: #f4f6f7;
    width: 300px;
    margin-bottom: 100px;
`;

export const StatisticsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

export const StatisticsListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: ${300 / 4}px;
    height: ${300 / 4}px;
    background-color: ${getRandomHexColor()};
    border: 1px solid #d6dbdf;
    & span {
        color: ${getRandomHexColor()};
    }
`;

export const Label = styled.span`
    font-size: 16px;
    font-weight: 400;
`;

export const Percentage = styled.span`
    font-size: 20px;
    font-weight: 400;
`;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
