import { Settings, LoginResponse } from '../models';

// @dynamic
export class DrupalConstants {
  // Singletons
  private static instance: DrupalConstants;
  // props
  private settings: Settings;
  private connection: LoginResponse;
  private token: string;
  private tokenInit = false;

  /**
   * Init the module with Drupal 8 website configs
   * @param settings Drupal 8 back-end config
   */
  static init(settings: Settings) {
    // Optional config default values
    if (!settings.requestTimeout) {
      // 10 seconds
      settings.requestTimeout = 10000;
    }
    if (!settings.cookieLifetime) {
      // 23 days
      settings.cookieLifetime = 2000000;
    }
    this.Instance.settings = settings;
  }

  static get Token(): string {
    return this.Instance.token;
  }

  static set Token(value: string) {
    this.Instance.tokenInit = value ? true : false;
    this.Instance.token = value;
  }

  static get TokenInit(): boolean {
    return this.Instance.tokenInit;
  }

  static set TokenInit(value: boolean) {
    this.Instance.tokenInit = value;
  }

  /**
   * Get the settings object, Supports dynamic config
   */
  static get Settings(): Settings {
    if (!this.Instance.settings) {
      throw new Error('ngx-drupal8-rest: Application settings are not set, Please read README.MD file');
    }
    return this.Instance.settings;
  }

  /**
   * Get the back-end structured url
   */
  static get backEndUrl(): string {
    const settings = this.Settings;
    // Add protocol
    const url = settings.protocol + '://' + settings.host;
    // Check for port and return
    return settings.port ? url + ':' + settings.port : url;
  }

  /**
   * Get Singleton instance
   */
  private static get Instance() {
    if (!this.instance) {
      this.instance = new DrupalConstants();
    }
    return this.instance;
  }

  /**
   * Set the current connection info
   */
  static set Connection(newConnection: LoginResponse) {
    this.Instance.connection = newConnection;
  }

  /**
   * Get current connection info
   */
  static get Connection(): LoginResponse {
    return this.Instance.connection;
  }
}
