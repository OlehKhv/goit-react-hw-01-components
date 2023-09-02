import PropTypes from 'prop-types';
import {
    Label,
    Percentage,
    StatisticsList,
    StatisticsListItem,
    StatisticsSection,
} from './Statistics.slyled';

export const Statistics = ({ data, title }) => {
    return (
        <StatisticsSection>
            {title && <h2 className="title">{title}</h2>}

            <StatisticsList>
                {data.map(({ id, label, percentage }) => (
                    <StatisticsListItem key={id}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}%</Percentage>
                    </StatisticsListItem>
                ))}
            </StatisticsList>
        </StatisticsSection>
    );
};

Statistics.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
    title: PropTypes.string,
};
