function ButtonGroup({ state, setState, possibleStates }) {
  const indexOfCurrentState = possibleStates.findIndex(
    (possibleState) => possibleState === state
  );
  const previousState = possibleStates[indexOfCurrentState - 1];
  const nextState = possibleStates[indexOfCurrentState + 1];

  return (
    <div>
      {/* 
      {previousState && (
        <button onClick={() => setState(previousState)}>{previousState}</button>
      )}
      */}
      {previousState ? (
        <button onClick={() => setState(previousState)}>{previousState}</button>
      ) : null}
      <button>Show Details - We're in {state}</button>
      {nextState ? (
        <button onClick={() => setState(nextState)}>{nextState}</button>
      ) : null}
    </div>
  );
}

export default ButtonGroup;
