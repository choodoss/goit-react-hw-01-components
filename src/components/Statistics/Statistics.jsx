import Stat from 'components/Statistics/Stat/Stat'
import { Section, Title } from './Statistics.styled'

export default function Statistics({ title, stats }) {
    const statistics =
        <Section>
            <Title>{title && title}</Title>
            <ul>
                {stats.map((stat) => {
                    return <Stat key={stat.id} label={stat.label} percentage={stat.percentage} />
                })}
            </ul>
        </Section>;
    return statistics;
}