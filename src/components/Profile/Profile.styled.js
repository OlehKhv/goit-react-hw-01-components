import styled from 'styled-components';

export const ProfileCard = styled.div`
    background-color: #f4f6f7;
    width: 300px;
    margin-bottom: 100px;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
`;

export const IconAvatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #1c2833;
`;

export const Tag = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
    color: #808b96;
`;

export const Location = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #808b96;
`;

export const Stats = styled.ul`
    display: flex;
    background-color: #e5e8e8;
    & li {
        width: 100px;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid #d6dbdf;
    }
`;

export const Label = styled.span`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 4px;
    color: #808b96;
`;

export const Quantity = styled.span`
    font-size: 20px;
    font-weight: 600;
    color: #1c2833;
`;
