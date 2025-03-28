import { userRepository } from "../repositories/userRepository";

export const userService = {
  async createUser(data: { name?: string; email: string; password: string }) {
    return userRepository.createUser(data);
  },
  
  async getAllUsers() {
    return userRepository.getAllUsers();
  },

  async getUserById(id: number) {
    return userRepository.getUserById(id);
  },
  
  async updateUser(id: number, data: { name?: string; email?: string }) {
    return userRepository.updateUser(id, data);
  },

  async deleteUser(id: number) {
    return userRepository.deleteUser(id);
  },
};
