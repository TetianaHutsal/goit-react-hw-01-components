import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FriendListItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 250px;
  border-radius: 10px;
  background-color: #dff1e0;
`;

const StatusDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $isOnline }) => ($isOnline ? 'green' : 'red')};
  margin-right: 10px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Name = styled.p`
  color: #0d2f7d;
  font-size: 18px;
  font-weight: bold;
`;

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemContainer>
      <StatusDot $isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </FriendListItemContainer>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
