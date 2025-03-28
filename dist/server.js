import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import prisma from "./prismaClient"; // Ensure Prisma is initialized
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
// Register routes
app.use("/users", userRoutes);
// Root Route
app.get("/", (req, res) => {
    res.send("Hello, Express with TypeScript!");
});
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
});
const PORT = process.env.PORT || 3000;
prisma
    .$connect()
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.error("Error connecting to database:", error);
    process.exit(1);
});
