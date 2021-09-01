import React, { useEffect, useState } from "react";
import { Button } from '@material-ui/core';
import "../node_modules/react-dat-gui/build/react-dat-gui.css";
import styles from "./App.css";

import FluidAnimation from "./react-fluid-animation";
import random from "random";

const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005
};

let billabongTeam = [
  'Ilya',
  'Geoff',
  'Peter',
  'Jono',
  'Andrew',
  'Andy',
  'Kathleen',
  'Kane',
  'Rizky',
  'Sindhu'
];

const App = () => {

  const [availableTeam, setAvailableTeam] = useState(billabongTeam);
  const [displayedMember, setDisplayedMember] = useState();
  const [config, setConfig] = useState(...defaultConfig);

  useEffect(() => {
    _reset();
  }, [])


  const _reset = () => {
    if (this._animation) {
      this._animation.addRandomSplats(random.int(100, 180));
    }
  };

  const _animationRef = ref => {
    this._animation = ref;
    this._reset();
  };

  const _onUpdate = config => {
    this.setState({ config });
  };

  const _onClickRandomSplats = () => {
    this._animation.addSplats((5 + Math.random() * 20) | 0);
  };

  const _onReset = () => {
    this.setState({ config: { ...defaultConfig } });
  };

  const selectTeammate = () => {
    const itemIndexToSelect = Math.floor(Math.random() * availableTeam.length);
    let temp = availableTeam;
    const selectedItem = temp.splice(itemIndexToSelect, 1)[0];
    setDisplayedMember(selectedItem);
    if (!selectedItem) {
      resetDuck();
    } else {
      setAvailableTeam(temp);
    }
  };

  const resetDuck = () => {
    setAvailableTeam(billabongTeam);
  }

  return (
    <div
      style={{
        height: "100vh"
      }}
    >
      <Button classes={{
        root: styles.Button,
      }} className={styles.Button} onClick={() => { selectTeammate() }} variant="contained">Let's go!</Button>
      <Button classes={{
        root: styles.Button,
      }} className={styles.Button} onClick={() => { resetDuck() }} variant="contained">Reset</Button>
      <FluidAnimation config={config} animationRef={this._animationRef} />

      <div
        style={{
          position: "absolute",
          zIndex: 1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: "1em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
          pointerEvents: "none"
        }}
      >
        <h1
          style={{
            fontSize: "3em",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"
          }}
        >
          Billabong Standup
          </h1>
        {displayedMember ? <h1>You're up {displayedMember}!</h1> : null}
      </div>

    </div>
  );
};
export default App;