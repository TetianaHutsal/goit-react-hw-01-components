import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #afe3dd;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  color: #68106b;
`;

const Tag = styled.p`
  font-size: 18px;
  color: #23396e;
  display: flex;
  justify-content: center;
`;

const Location = styled.p`
  font-size: 16px;
  color: #0e1716;
  display: flex;
  justify-content: center;
`;

const Stats = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: 15px;
`;

const StatsItem = styled.li`
  display: flex;
  text-align: center;
  flex: 1;
  padding: 10px 0;
  position: relative;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #2d572d;
`;

const Quantity = styled.span`
  font-size: 16px;
  color: #6b00d7;
`;

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <div className="description">
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <Stats>
        <StatsItem>
          <Label>Followers: </Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views: </Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes: </Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
