import { ErrorHandler } from '@angular/core';
import { Notifier } from '@airbrake/browser';

// TODO: remover e renovar as chaves
export class AirbrakeErrorHandler implements ErrorHandler {
  airbrake: Notifier;

  constructor() {
    this.airbrake = new Notifier({
      projectId: 279398,
      projectKey: '1e9949c8d5dbdc8d8c5d3ddd0ae092cb',
      environment: 'production'
    });
  }

  handleError(error: any): void {
    this.airbrake.notify(error);
  }
}
