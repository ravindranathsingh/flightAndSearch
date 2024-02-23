const { City } = require("../models/index");
const { Op } = require('sequelize')

class CityRepository {
    async createCity ({ name }) {
        try {
            const city= await City.create({
                name
            })
            return city;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw {error}
        }
    }

    async deleteCity (cityId) {
        try {
            const response = await City.destroy({
                where: {
                    Id: cityId
                }
            })
            return response;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw {error}
        }
    }

    async updateCity (cityId, data) {
        try {
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw {error}
        }
    }

    async getCity (cityId) {
        try {
            const city = await City.findByPk(cityId)
            return city;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw {error}
        }
    }

    async getAllCities (filter) {
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where : {
                        name: {
                            [Op.startsWith]: filter.name
                        }                        
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw {error}
        }
    }
}

module.exports = CityRepository;