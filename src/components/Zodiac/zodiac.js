import './zodiac.css';

export default function Zodiac(props) {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/zodiacs/${props.name}.png`} />
      <span>{props.name}</span>
      <p>{props.dates}</p>
    </div>
  );
}