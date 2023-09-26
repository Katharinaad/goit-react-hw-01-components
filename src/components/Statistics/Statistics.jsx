import css from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={css.item} key={id}>
              <p className={css.label}>{label}</p>
              <p className={css.percentage}>{percentage}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
