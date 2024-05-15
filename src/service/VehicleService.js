class VehicleService {
  _apiBaseUrl = 'https://test.tspb.su/test-task';
  _fetchOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  };

  getResource = async (url) => {
    const response = await fetch(url, this._fetchOptions);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
  };

  getVehicles = async () => {
    const results = await this.getResource(`${this._apiBaseUrl}/vehicles`);

    return results.map(this._transformVehicle);
  };

  _transformVehicle = (vehicle) => {
    return {
      id: vehicle.id,
      name: vehicle.name || 'name is unknown',
      model: vehicle.model || 'model is unknown',
      color: vehicle.color || 'color is unknown',
      year: vehicle.year || 'year is unknown',
      price: vehicle.price || 'price is unknown',
      latitude: vehicle.latitude || null,
      longitude: vehicle.longitude || null
    };
  };
}

export default VehicleService;
