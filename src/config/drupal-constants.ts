import { Settings } from '../models';

export class DrupalConstants {
  private static instance: DrupalConstants;

  private settings: Settings;
  // private connection: SystemConnection;

  static init(settings: Settings) {
    if (!settings.requestTimeout) {
      settings.requestTimeout = 10000;
    }
    this.Instance.settings = settings;
  }

  static get Settings(): Settings {
    if (!this.Instance.settings) {
      throw new Error('ngx-drupal8-rest: Application settings are not set, Please read README.MD file');
    }
    return this.Instance.settings;
  }

  static get backEndUrl(): string {
    const settings = this.Settings;
    const url = settings.protocol + '://' + settings.host;
    return settings.port ? url + ':' + settings.port : url;
  }

  private static get Instance() {
    if (!this.instance) {
      this.instance = new DrupalConstants();
    }
    return this.instance;
  }

  // static set Connection(newConnection: SystemConnection) {
  //   this.Instance.connection = newConnection;
  // }

  // static get Connection(): SystemConnection {
  //   return this.Instance.connection;
  // }
}
