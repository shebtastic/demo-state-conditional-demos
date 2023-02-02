import { useState } from "react";
import ButtonGroup from "./components/ButtonGroup";

function App() {
  const [state, setState] = useState("Doing");

  const possibleStates = ["Todo", "Doing", "Currywurst", "Done"];

  return (
    <ButtonGroup
      state={state}
      setState={setState}
      possibleStates={possibleStates}
    />
  );
}

export default App;
