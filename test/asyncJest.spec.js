const answerPhone = require('../src/asyncJest');

describe('1 - O retorno do telefonema', () => {
  test('atende', async () => {
    expect.assertions(1);
    await expect(answerPhone('Alguem')).resolves.toBe('Oi!');
  });
  test('ocupado', async () => {
    expect.assertions(1);
    await expect(answerPhone()).rejects.toThrow(Error('Infelizmente não podemos atender...'));
  });
});
