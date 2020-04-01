const BaseRepository = require('./BaseRepository')
const UserSchema = require("../models/User");



class UserRepository extends BaseRepository {

    constructor() {
        super(UserSchema);
    }

    async create(user) {
        return await super.$save(user);
    }

    async getById(id) {
        return await super.$getById(id);
    }
}

module.exports = UserRepository