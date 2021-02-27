import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallengesContext";
import { Countdown } from "../components/Countdown";
import { CountdownProvider } from "../contexts/CountdownContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
