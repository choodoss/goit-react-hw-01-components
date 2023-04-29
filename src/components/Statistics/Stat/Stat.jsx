import PropTypes from 'prop-types'

export default function Stat({ label, percentage }) {

    const stat =
        <li>
            <span>{label}</span>
            <span>{percentage}%</span>
        </li>;
    return stat;
}

Stat.protoTypes = {
    key: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}