import { userService } from "../services/userService";
export const userController = {
    async createUser(req, res) {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        }
        catch (error) {
            res.status(500).json({ error: "Error creating user" });
        }
    },
    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        }
        catch (error) {
            res.status(500).json({ error: "Error fetching users" });
        }
    },
    async getUserById(req, res) {
        try {
            const user = await userService.getUserById(Number(req.params.id));
            if (!user) {
                res.status(404).json({ error: "User not found" });
                return;
            }
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ error: "Error fetching user" });
        }
    },
    async updateUser(req, res) {
        try {
            const user = await userService.updateUser(Number(req.params.id), req.body);
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ error: "Error updating user" });
        }
    },
    async deleteUser(req, res) {
        try {
            await userService.deleteUser(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: "Error deleting user" });
        }
    },
};
