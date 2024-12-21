class VehicleService {
  _apiBaseUrl = 'https://raw.githubusercontent.com/dumbus';
  _repoName = 'react-vehicles-catalog';
  _branchName = 'json-data';
  _fileName = 'react-vehicles-catalog-data.json';

  _fullFilePath = `${this._apiBaseUrl}/${this._repoName}/${this._branchName}/${this._fileName}`;

  getResource = async (url) => {
    const response = await fetch(this._fullFilePath);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
  };

  getVehicles = async () => {
    const results = await this.getResource(
      `${this._apiBaseUrl}/49c88214-2607-44dc-b6d0-c1ad62ccc4bc`
    );

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
