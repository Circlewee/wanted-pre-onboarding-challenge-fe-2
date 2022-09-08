class Api {
  instance;

  constructor(instance) {
    this.instance = instance;
  }

  async post(endpoint, data) {
    const response = await this.instance.post(endpoint, data);

    return response;
  }

  async get(endpoint) {
    const response = await this.instance.get(endpoint);

    return response;
  }

  async update(endpoint, data) {
    const response = await this.instance.update(endpoint, data);

    return response;
  }

  async del(endpoint, data) {
    const response = await this.instance.delete(endpoint, data);

    return response;
  }
}

export default Api;
