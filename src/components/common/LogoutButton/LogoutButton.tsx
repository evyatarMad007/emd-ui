import React from 'react';
import { LogoutButtonStyle } from './LogoutButton.styled';
import Icon from '../Icon/Icon';

interface LogoutButtonProps {
  linkColor?: string;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ linkColor }) => {
  return (
    <LogoutButtonStyle>
      <Icon margin='0 3.25px 0 0' iconType={"logout"} iconSize={17} />
      <span className='text'>התנתק</span>
    </LogoutButtonStyle>
  );
}

export default LogoutButton;
