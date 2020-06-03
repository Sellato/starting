class MyStorage {
  public getNamespace: () => string;

  constructor(namespace: string) {
    this.getNamespace = () => namespace;
  }

  static isAvailable(): boolean {
    const identifier = Date.now().toString();

    try {
      localStorage.setItem(identifier, identifier);
      localStorage.removeItem(identifier);

      return true;
    } catch {
      return false;
    }
  }

  get(): { [key: string]: unknown } | null {
    try {
      const data = localStorage.getItem(this.getNamespace());

      return typeof data === 'string' ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  set(data: { [key: string]: unknown }): boolean {
    try {
      localStorage.setItem(this.getNamespace(), JSON.stringify(data));

      return true;
    } catch {
      return false;
    }
  }
}

export default MyStorage;