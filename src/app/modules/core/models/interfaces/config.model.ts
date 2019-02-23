export interface ConfigOptions {
  id: string;
  login: string;
  email: string;
}

export interface ConfigModel {
  config: Partial<ConfigOptions>;
}
