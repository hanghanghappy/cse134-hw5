function Button() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return React.createElement(
    "button", {onClick: handleClick}, `Times Clicked: ${count}`
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(Button)
);