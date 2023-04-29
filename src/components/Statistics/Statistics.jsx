import Stat from 'components/Statistics/Stat/Stat'

export default function Statistics({ title, stats }) {
    const statistics =
        <section>
            <h2>{title && title}</h2>
            <ul>
                {stats.map((stat) => {
                    return <Stat props={stat} />
                })}
            </ul>
        </section>;
    return statistics;
}