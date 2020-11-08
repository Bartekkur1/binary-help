import React, { FC } from 'react';
import { InputGroupProps, InputType } from './types';

export const InputGroup: FC<InputGroupProps> = (props) => (
    <div className="input_group">
        <span className="input_group-label">{props.label}</span>
        <input
            size={30}
            readOnly={props.disabled}
            className="input_group-text"
            onChange={e => props.valueConsumer(e.target.value)}
            value={props.value}
        />
        <select
            onChange={e => props.inputTypeConsumer(e.target.value)}
            value={props.inputTypeValue}
        >
            {Object.keys(InputType).filter(x => !(parseInt(x) >= 0)).map((name, index) =>
                <option key={index} value={name}>{name}</option>)}
        </select>
    </div>
)