import React from "react";

interface ButtonProps {
  item: string;
  count: number;
  setCount: (value: number) => void;
}

const Button: React.FC<ButtonProps> = ({ item, count, setCount }) => {
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{marginBottom: "10px"}}>
      <button onClick={handleClick}>{item}</button>
      <span style={{marginLeft: "10px"}}>{count}</span>
    </div>
  );
};

export default Button;