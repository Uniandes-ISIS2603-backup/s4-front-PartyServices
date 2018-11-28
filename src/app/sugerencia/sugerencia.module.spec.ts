import { SugerenciaModule } from './sugerencia.module';

describe('SugerenciaModule', () => {
  let sugerenciaModule: SugerenciaModule;

  beforeEach(() => {
    sugerenciaModule = new SugerenciaModule();
  });

  it('should create an instance', () => {
    expect(sugerenciaModule).toBeTruthy();
  });
});
