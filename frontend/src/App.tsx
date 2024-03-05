import { useState } from "react";
import Button from "./components/Button";

function App() {

  const dummy =  ["Apple", "Banana", "Guava", "Grapes", "Pineapple"];
  const [counts, setCounts] = useState<{ [key: string]: number }>({});

  useState(() => {
    const initialCounts = dummy.reduce((acc, item) => {
      acc[item] = 0;
      return acc;
    }, {} as { [key: string]: number });
    setCounts(initialCounts);
  });

  const handleReset = () => {
    const resetCounts = { ...counts };
    for (const key in resetCounts) {
      resetCounts[key] = 0;
    }
    setCounts(resetCounts);
  };

  return (
    <div className="mainContainer">
      {
        dummy.map((item,key) => {
          return <Button item={item} key={key} count={counts[item]} setCount={(value) => setCounts((prevCounts) => ({ ...prevCounts, [item]: value }))} />
        })
      }
      <button onClick={handleReset}>Reset Counts</button>
    </div>
  )
}

export default App
