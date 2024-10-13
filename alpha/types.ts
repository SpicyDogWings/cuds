interface File {
  type: {
    readonly name: string,
    value: string
  },
  version: {
    readonly name: string,
    value: string
  },
  name: {
    readonly name: string,
    value?: string
  },
  comment: {
    readonly name: string,
    value?: string
  },
  exec: {
    readonly name: string,
    value?: string
  },
  icon: {
    readonly name: string,
    value?: string
  },
  terminal: {
    readonly name: string,
    value: boolean
  }
};

export { File }
