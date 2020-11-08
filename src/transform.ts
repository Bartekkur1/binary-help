import { InputType } from './types';

export const transform = (input: string | number, inputType: InputType, targetType: InputType): string | number => {
    if (inputType === targetType)
        return input;

    let stringValue = input.toString();
    let numValue = parseInt(input as string, 2);

    if (inputType === InputType.DEC) {
        let binValue = parseInt(input as string).toString(2);
        return transform(binValue, InputType.BIN, targetType);
    }

    if (inputType === InputType.OCT) {
        let decValue = parseInt(input as string, 8);
        return transform(decValue, InputType.DEC, targetType);
    }

    if (inputType === InputType.HEX) {
        let decValue = parseInt(input as string, 16);
        return transform(decValue, InputType.DEC, targetType);
    }

    if (inputType === InputType.ZM && targetType === InputType.DEC) {
        if (input.toString().charAt(0) === "1") {
            return -transform(stringValue.slice(1, stringValue.length), InputType.BIN, InputType.DEC);
        } else {
            return transform(stringValue.slice(1, stringValue.length), InputType.BIN, InputType.DEC);
        }
    }

    if (inputType === InputType.C1 && targetType === InputType.DEC) {
        if (input.toString().charAt(0) === "1") {
            return -transform(flipBits(stringValue).slice(1, stringValue.length), InputType.BIN, InputType.DEC);
        } else {
            return transform(stringValue.slice(1, stringValue.length), InputType.BIN, InputType.DEC);
        }
    }

    if (inputType === InputType.C2 && targetType === InputType.DEC) {
        if (input.toString().charAt(0) === "1") {
            return transform(stringValue.slice(1, stringValue.length), InputType.BIN, InputType.DEC) as number - 128;
        } else {
            return transform(stringValue.slice(1, stringValue.length), InputType.BIN, InputType.DEC);
        }
    }

    if (targetType === InputType.BIN) {
        return input;
    } else if (targetType === InputType.OCT) {
        return numValue.toString(8);
    } else if (targetType === InputType.DEC) {
        return numValue;
    } else if (targetType === InputType.HEX) {
        return numValue.toString(16).toUpperCase();
    } else if (targetType === InputType.ZM) {
        if (input.toString().includes("-")) {
            return input.toString().replace("-", "1");
        } else {
            return "0" + input;
        }
    } else if (targetType === InputType.C1) {
        if (input.toString().includes("-")) {
            let res = "1" + flipBits(input.toString().replace("-", ""));
            while (res.length < 8) {
                res = "1" + res;
            }
            return res;
        } else {
            let res = "0" + input;
            while (res.length < 8) {
                res = "0" + res;
            }
            return res;
        }
    } else if (targetType === InputType.C2) {
        if((input as number) < 0) {
            let baseNum = 128 + numValue;
            let res = baseNum.toString(2);
            while(res.length < 8) {
                res = "0" + res;
            }
            return "1" + res.substring(1, res.length);
        } else {
            let res = (input as number).toString(2);
            while(res.length < 8) {
                res = "0" + res;
            }
            return res;
        }
    }
    return 1;
}

export const flipBits = (value: string) => {
    return value.split('').map((char) => char === '0' ? '1' : '0').join('');
}