import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './Stat.styled'

export default function Stat({ label, percentage, color, numSim }) {
    const stat =
        <Item color={color} numSim={numSim}>
            <Label>{label} </Label>
            <Percentage>{percentage}%</Percentage>
        </Item>;
    return stat;
}

Stat.protoTypes = {
    key: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}

