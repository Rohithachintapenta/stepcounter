
import { useState } from "react";
import StepDisplay from "./StepDisplay";
import StepButton from "./StepButton";

function App() {
  const [count, setCount] = useState<number>(0);

  function addStep() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <div>
      <h1>Step Counter</h1>

      <StepDisplay count={count} />

      <StepButton addStep={addStep} />
    </div>
  );
}

export default App;
