import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Carousel from './components/Carousel';

export default function App() {
  const [entered, setEntered] = useState(false);
  return entered ? (
    <Carousel />
  ) : (
    <WelcomeScreen onEnter={() => setEntered(true)} />
  );
}
