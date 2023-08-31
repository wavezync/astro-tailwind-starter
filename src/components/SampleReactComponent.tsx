import { useState } from 'react';

export default function SampleReactComponent() {
  const [value, setValue] = useState(0);

  return (
    <div className="p-5">
      <div className="text-2xl">This is a sample react component</div>
      <span className="text-center p-2 m-2 bg-orange-500 text-white">
        Value: {value}
      </span>
      <button
        onClick={() => setValue((val) => val + 1)}
        className="text-white bg-slate-800 hover:bg-slate-600 hover:text-blue-200 rounded-md p-1 m-2"
      >
        Increase
      </button>
    </div>
  );
}
