import css from './Statistics.module.css';
import PropTypes from 'prop-types';

 const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
})=> {
  return (
    <div className={css.statistics}>
      <h2 className={css.statistics__title}>Statistics</h2>
      <ul className={css.statistics__list}>
        
            <li className={css.statistics__item}>
              Good:
              <span className={css.statistics__name} key={good}>
                {good}
              </span>
            </li>

            <li className={css.statistics__item}>
              Neutral:
              <span className={css.statistics__name} key={neutral}>
                {neutral}
              </span>
            </li>

            <li className={css.statistics__item}>
              Bad
              <span className={css.statistics__name} key={bad}>
                {bad}
              </span>
            </li>
          
        
        <li className={css.statistics__item} key={total}>
          <span>Total: </span>
          <span>{total}</span>
        </li>
        <li className={css.statistics__item}>
          <span>Positive feedback: </span>
          <span>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
  }

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;