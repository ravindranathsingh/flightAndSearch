const { City } = require("../models/index");

class CityRepository {
    async createCity ({ name }) {
        try {
            const city= await City.create({
                name
            })
            return city;
        } catch (error) {
            console.log("Something went wrong in the repo");
            throw {error}
        }
    }

    async deleteCity (cityId) {
        try {
            await City.destroy({
                where: {
                    Id: cityId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the repo");
            throw {error}
        }
    }

    async updateCity (cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    Id: cityId
                }
            })
            return city;
        } catch (error) {
            console.log("Something went wrong in the repo");
            throw {error}
        }
    }

    async getCity (cityId) {
        try {
            const city = await City.findByPk(city)
            return city;
        } catch (error) {
            console.log("Something went wrong in the repo");
            throw {error}
        }
    }
}

module.exports = CityRepository;