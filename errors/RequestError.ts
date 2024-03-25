class RequestError extends Error {
  status: number;
  meta: object;
  constructor(message: string, status: number, meta: object) {
    super(message);
    this.status = status;
    this.meta = meta;
  }
}
