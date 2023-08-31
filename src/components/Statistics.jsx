import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StatisticsContainer = styled.section`
  display: flex;
  padding: 15px;
  background-color: #f3e6bf;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  border-radius: 8px;
`;

const Title = styled.h2`
  display: flex;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  color: #68106b;
`;

const StatList = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  padding: 0;
  flex-direction: row;
  justify-content: center;
`;

const StatItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 25%;
  margin-bottom: 8px;
  flex-direction: column;
  height: 50px;
  width: 50px;
`;

const Label = styled.span`
  flex-grow: 1;
  font-size: 16px;
`;

const Percentage = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <StatItem
            key={stat.id}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
