import { userRepository } from "../repositories/userRepository";
export const userService = {
    async createUser(data) {
        return userRepository.createUser(data);
    },
    async getAllUsers() {
        return userRepository.getAllUsers();
    },
    async getUserById(id) {
        return userRepository.getUserById(id);
    },
    async updateUser(id, data) {
        return userRepository.updateUser(id, data);
    },
    async deleteUser(id) {
        return userRepository.deleteUser(id);
    },
};
