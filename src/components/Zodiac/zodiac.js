import './Zodiac.css';

export default function Zodiac({ name, dates }) {
  return (
    <div className="container">
      <img src={`${process.env.PUBLIC_URL}/zodiacs/${name}.png`} />
      <h2>{name}</h2>
      <p>{dates}</p>
    </div>
  );
}