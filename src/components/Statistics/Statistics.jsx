import css from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(item => {
          return (
            <li className={css.item} key={item.id}>
              <p className={css.label}>{item.label}</p>
              <p className={css.percentage}>{item.percentage}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
