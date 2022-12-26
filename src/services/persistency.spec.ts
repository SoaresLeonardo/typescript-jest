import { Persistency } from './persistency';

// describe('TESTANDO ALGUMA COISA', () => {
//   it('descrição do teste (IT)', () => {
//     const number = 1;
//     expect(number).toBe(1);
//   });
// });

// describe('TESTANDO OUTRA COISA', () => {
//   it('descrição do teste (IT)', () => {
//     const number = 2;
//     expect(number).toBe(2);
//   });
// });

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log wodth "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso');
  });
});
