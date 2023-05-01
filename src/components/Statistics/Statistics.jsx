import Stat from 'components/Statistics/Stat/Stat'
import { Section, Title, StatList } from './Statistics.styled'
import PropTypes from 'prop-types'

export default function Statistics({ title, stats }) {
    const statistics =
        <Section>
            <Title>{title}</Title>
            <StatList>
                {stats.map((stat) => {
                    return <Stat key={stat.id} label={stat.label} percentage={stat.percentage} numSim={stats.length} color={getRandomColor()} />
                })}
            </StatList>
        </Section>;
    return statistics;
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stat: PropTypes.object,
}

function getRandomColor() {
    const bannedColors = ['#000000', '#ffffff', '#333333', '#444444', '#555555', '#666666', '#777777', '#888888', '#999999'];

    let color;
    do {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        color = "#" + ("0" + red.toString(16)).substr(-2) + ("0" + green.toString(16)).substr(-2) + ("0" + blue.toString(16)).substr(-2);
    } while (bannedColors.includes(color));

    return color;
}