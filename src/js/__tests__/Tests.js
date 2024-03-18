import ArrayBufferConverter from "../ArrayBufferConverter";
import getBuffer from '../getBuffer';

test('Тестируем метод load(). Если объекты совпадают - sucess', () => {
  const buffer = getBuffer();
  ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toEqual(buffer);
});

test("Тестируем метод toString(). Если строки совпадают - sucess", () => {
  const buffer = getBuffer();
  ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toEqual(buffer);
  const receivedString = ArrayBufferConverter.toString();
  const exampleString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(receivedString).toBe(exampleString);
});