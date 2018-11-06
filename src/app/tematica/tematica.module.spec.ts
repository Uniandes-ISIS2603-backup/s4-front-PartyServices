import { TematicaModule } from './tematica.module';

describe('TematicaModule', () => {
  let tematicaModule: TematicaModule;

  beforeEach(() => {
    tematicaModule = new TematicaModule();
  });

  it('should create an instance', () => {
    expect(tematicaModule).toBeTruthy();
  });
});
