import PropTypes from 'prop-types';
import { StyledNotification } from './Notification.styled';

const Notification = ({ text }) => (
  <StyledNotification>{text}</StyledNotification>
);

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Notification;