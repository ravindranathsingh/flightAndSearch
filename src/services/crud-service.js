class CrudServices {
    constructor(repository) {
        this.repository = repository;
    }
    async create (data) {
        try {
            const response = await this.repository.create(data)
            return response;  
        } catch (error) {
            console.log("Something went at service layer");
            throw{error}
        }
    }
    async delete (id) {
        try {
            await this.repository.destory(id)
            return true;
        } catch (error) {
            console.log("Something went at service layer");
            throw{error}
        }
    }
    async get (id) {
        try {
           const response = await this.repository.get(id)
           return response;
        } catch (error) {
            console.log("Something went at service layer");
            throw{error}
        }
    }
    async getAll () {
        try {
            const response = await this.repository.getAll()
            return response;
        } catch (error) {
            console.log("Something went at service layer");
            throw{error}
        }
    }
    async update(id, data) {
        try {
            const response = await this.repository.update(data, {
                where: {
                    id: id
                }
            })
            return response;
        } catch (error) {
            console.log("Something went at service layer");
            throw{error}
        }
    }
}

module.exports = CrudServices;