import Zodiac from '../Zodiac/zodiac';
import './main.css';
import { zodiacs } from '../../data';

import background from '../../background.png';


export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiacs.map((zodiac) => (
        <Zodiac key={zodiac.name} name={zodiac.name} dates={zodiac.dates} />

      ))}
    </main>
  );
}