export interface File {
  type: {
    readonly key: string;
    value: string;
  };
  version: {
    readonly key: string;
    value: string;
  };
  name: {
    readonly key: string;
    value?: string;
  };
  comment: {
    readonly key: string;
    value?: string;
  };
  exec: {
    readonly key: string;
    value?: string;
  };
  icon: {
    readonly key: string;
    value?: string;
  };
  terminal: {
    readonly key: string;
    value: boolean;
  };
}
