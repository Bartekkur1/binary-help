export enum InputType {
    BIN = "BIN",
    OCT = "OCT",
    DEC = "DEC",
    HEX = "HEX",
    ZM = "ZM",
    C1 = "C1",
    C2 = "C2"
}

export interface InputGroupProps {
    value: string;
    label: string;
    disabled: boolean;
    inputTypeValue: string;
    valueConsumer: (value: string) => void;
    inputTypeConsumer: (value: string) => void;
}