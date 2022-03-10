import Zodiac from '../Zodiac/Zodiac';
import './Main.css';
import { zodiacs } from '../data';

import background from '../background.png';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiacs.map((sign) => (
        <Zodiac key={sign.name} name={sign.name} dates={sign.dates} />
      ))}
    </main>
  );
}