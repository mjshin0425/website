import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  // 빈배열, 초기에 한 번만 실행
  useEffect(() => {
    console.log("i run only once.");
  }, []);

  //keyword, 변화시 api 호출
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);

  //keyword, counter 둘 중 하나 변화 시 api호출
  useEffect(() => {
    console.log("run when 'keyword' or 'counter' changes");
  }, [keyword, counter]);
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here.." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
