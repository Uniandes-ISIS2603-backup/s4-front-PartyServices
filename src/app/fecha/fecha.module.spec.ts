import { FechaModule } from './fecha.module';

describe('FechaModule', () => {
  let fechaModule: FechaModule;

  beforeEach(() => {
    fechaModule = new FechaModule();
  });

  it('should create an instance', () => {
    expect(fechaModule).toBeTruthy();
  });
});
