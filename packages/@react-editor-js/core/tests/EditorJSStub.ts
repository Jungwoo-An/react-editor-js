export class EditorJSStub {
  private _value: any | null = null

  public get value() {
    return this._value
  }

  public blocks = {
    render: (value) => {
      this._value = value
    },
  }

  public destroy() {}
}
