import React, { useState } from 'react';
import './App.css';
import { InputGroup } from './InputGroup';
import { transform } from './transform';
import { InputType } from './types';

const App = () => {
  const [input, setInput] = useState<string | number>("");
  const [output, setOutput] = useState<string | number>("");
  const [inputType, setInputType] = useState<InputType>(InputType.BIN);
  const [outputType, setOutputType] = useState<InputType>(InputType.HEX);

  const handleInput = (value: string) => {
    setInput(value);
    let res = transform(value, InputType[inputType], InputType[outputType]);
    if (typeof res === 'string') {
      setOutput(res.toUpperCase());
    } else {
      setOutput(res.toString());
    }
  }

  const handleInputTypeChange = (value: string) => {
    setInputType(value as InputType);
    handleInput(input.toString());
  }

  const handleOutputTypeChange = (value: string) => {
    setOutputType(value as InputType);
    handleInput(input.toString());
  }

  return (
    <div className="app">
      <InputGroup
        value={input.toString()}
        label={"Input"}
        disabled={false}
        inputTypeValue={inputType}
        valueConsumer={handleInput}
        inputTypeConsumer={handleInputTypeChange}
      />
      <InputGroup
        value={output.toString()}
        label={"Output"}
        disabled={true}
        inputTypeValue={outputType}
        valueConsumer={setOutput}
        inputTypeConsumer={handleOutputTypeChange}
      />
    </div>
  );
}

export default App;
