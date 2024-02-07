import css from './Notification.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

const Notification = ({ message }) => {
  return <h2 key={nanoid()} className={css.notification}>
    {message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
