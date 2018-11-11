import { NotificacionModule } from './notificacion.module';

describe('NotificacionModule', () => {
  let notificacionModule: NotificacionModule;

  beforeEach(() => {
    notificacionModule = new NotificacionModule();
  });

  it('should create an instance', () => {
    expect(notificacionModule).toBeTruthy();
  });
});
