import { SugerenciaModule } from './valoracion.module';

describe('SugerenciaModule', () => {
  let sugerenciaModule: SugerenciaModule;

  beforeEach(() => {
    sugerenciaModule = new SugerenciaModule();
  });

  it('should create an instance', () => {
    expect(SugerenciaModule).toBeTruthy();
  });
});
