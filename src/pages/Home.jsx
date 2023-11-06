import { useRef, useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  console.log(count);
  const ref = useRef();
  console.log(ref.current);
  return (
    <section>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span ref={ref}>{count}</span>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </section>
  );
};

export default Home;
