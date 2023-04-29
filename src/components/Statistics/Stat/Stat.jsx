
export default function Stat({ props: { id, label, percentage } }) {
    const stat =
        <li key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
        </li>;
    return stat;
}