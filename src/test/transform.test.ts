import { transform, flipBits } from '../transform';
import { InputType } from '../types';

const binValue = "101010";
const octValue = "52";
const decValue = 42;
const hexValue = "2A";

// BINARY
test('binary to binary', () => {
    expect(transform(binValue, InputType.BIN, InputType.BIN)).toBe(binValue);
});

test('binary to oct', () => {
    expect(transform(binValue, InputType.BIN, InputType.OCT)).toBe(octValue);
});

test('binary to dec', () => {
    expect(transform(binValue, InputType.BIN, InputType.DEC)).toBe(decValue);
});

test('binary to hex', () => {
    expect(transform(binValue, InputType.BIN, InputType.HEX)).toBe(hexValue);
});

// OCT
test('oct to binary', () => {
    expect(transform(octValue, InputType.OCT, InputType.BIN)).toBe(binValue);
});

test('oct to decimal', () => {
    expect(transform(octValue, InputType.OCT, InputType.DEC)).toBe(decValue);
});

test('oct to oct', () => {
    expect(transform(octValue, InputType.OCT, InputType.OCT)).toBe(octValue);
});

test('oct to hex', () => {
    expect(transform(octValue, InputType.OCT, InputType.HEX)).toBe(hexValue);
});

// DEC

test('dec to binary', () => {
    expect(transform(decValue, InputType.DEC, InputType.BIN)).toBe(binValue);
});

test('dec to oct', () => {
    expect(transform(decValue, InputType.DEC, InputType.OCT)).toBe(octValue);
});

test('dec to dec', () => {
    expect(transform(decValue, InputType.DEC, InputType.DEC)).toBe(decValue);
});

test('dec to hex', () => {
    expect(transform(decValue, InputType.DEC, InputType.HEX)).toBe(hexValue);
});

// HEX

test('hex to binary', () => {
    expect(transform(hexValue, InputType.HEX, InputType.BIN)).toBe(binValue);
});

test('hex to oct', () => {
    expect(transform(hexValue, InputType.HEX, InputType.OCT)).toBe(octValue);
});

test('hex to dec', () => {
    expect(transform(hexValue, InputType.HEX, InputType.DEC)).toBe(decValue);
});

test('hex to hex', () => {
    expect(transform(hexValue, InputType.HEX, InputType.HEX)).toBe(hexValue);
});

// ZM

test('negative decimal to ZM', () => {
    expect(transform("-10", InputType.DEC, InputType.ZM)).toBe("11010");
});

test('negative decimal to ZM', () => {
    expect(transform("-15", InputType.DEC, InputType.ZM)).toBe("11111");
});

test('positive decimal to ZM', () => {
    expect(transform("10", InputType.DEC, InputType.ZM)).toBe("01010");
});

test('positive decimal to ZM', () => {
    expect(transform("15", InputType.DEC, InputType.ZM)).toBe("01111");
});

test('ZM to decimal', () => {
    expect(transform("10001111", InputType.ZM, InputType.DEC)).toBe(-15);
});

test('ZM to decimal', () => {
    expect(transform("1101", InputType.ZM, InputType.DEC)).toBe(-5);
});

test('ZM to decimal', () => {
    expect(transform("00011111", InputType.ZM, InputType.DEC)).toBe(31);
});

// fliping them bits

test('flip bits test 1', () => {
    expect(flipBits("000000")).toBe("111111");
})

test('flip bits test 1', () => {
    expect(flipBits("101010101")).toBe("010101010");
})

// C1

test('C1 to decimal', () => {
    expect(transform("11110000", InputType.C1, InputType.DEC)).toBe(-15);
});

test('C1 to decimal', () => {
    expect(transform("10101010", InputType.C1, InputType.DEC)).toBe(-85);
});

test('C1 to decimal', () => {
    expect(transform("01111110", InputType.C1, InputType.DEC)).toBe(126);
});

test('C1 to decimal', () => {
    expect(transform("10000001", InputType.C1, InputType.DEC)).toBe(-126);
});

test('C1 to decimal', () => {
    expect(transform("11110111", InputType.C1, InputType.DEC)).toBe(-8);
});

test('decimal to C1', () => {
    expect(transform(-8, InputType.DEC, InputType.C1)).toBe("11110111");
});

test('decimal to C1', () => {
    expect(transform(-126, InputType.DEC, InputType.C1)).toBe("10000001");
});

test('decimal to C1', () => {
    expect(transform(126, InputType.DEC, InputType.C1)).toBe("01111110");
});

test('decimal to C1', () => {
    expect(transform(100, InputType.DEC, InputType.C1)).toBe("01100100");
});

test('decimal to C1', () => {
    expect(transform(-97, InputType.DEC, InputType.C1)).toBe("10011110");
});

test('decimal to C1', () => {
    expect(transform(-125, InputType.DEC, InputType.C1)).toBe("10000010");
});

test('decimal to C1', () => {
    expect(transform(33, InputType.DEC, InputType.C1)).toBe("00100001");
});

test('decimal to C1', () => {
    expect(transform(-69, InputType.DEC, InputType.C1)).toBe("10111010");
});

// C2

test('decimal to C2', () => {
    expect(transform(107, InputType.DEC, InputType.C2)).toBe("01101011");
});

test('decimal to C2', () => {
    expect(transform(-21, InputType.DEC, InputType.C2)).toBe("11101011");
});

test('decimal to C2', () => {
    expect(transform(100, InputType.DEC, InputType.C2)).toBe("01100100");
});

test('decimal to C2', () => {
    expect(transform(-115, InputType.DEC, InputType.C2)).toBe("10001101");
});

test('decimal to C2', () => {
    expect(transform(-126, InputType.DEC, InputType.C2)).toBe("10000010");
});

test('decimal to C2', () => {
    expect(transform(72, InputType.DEC, InputType.C2)).toBe("01001000");
});

test('decimal to C2', () => {
    expect(transform(-15, InputType.DEC, InputType.C2)).toBe("11110001");
});

test('decimal to C2', () => {
    expect(transform(-44, InputType.DEC, InputType.C2)).toBe("11010100");
});

test('C2 to decimal', () => {
    expect(transform("01101011", InputType.C2, InputType.DEC)).toBe(107);
});

test('C2 to decimal', () => {
    expect(transform("11101011", InputType.C2, InputType.DEC)).toBe(-21);
});

test('C2 to decimal', () => {
    expect(transform("10000001", InputType.C2, InputType.DEC)).toBe(-127);
});

test('C2 to decimal', () => {
    expect(transform("11000000", InputType.C2, InputType.DEC)).toBe(-64);
});

test('C2 to decimal', () => {
    expect(transform("01111111", InputType.C2, InputType.DEC)).toBe(127);
});

test('C2 to decimal', () => {
    expect(transform("11111111", InputType.C2, InputType.DEC)).toBe(-1);
});

test('C2 to decimal', () => {
    expect(transform("11110001", InputType.C2, InputType.DEC)).toBe(-15);
});