export class Task {
  private _promise: Promise<void>

  private _resolver: () => void

  constructor() {
    this._promise = new Promise((resolve) => {
      this._resolver = resolve
    })
  }

  public done() {
    this._resolver?.()
  }

  public wait() {
    return this._promise
  }
}
