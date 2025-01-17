import express from "npm:express";

const app = express();
const PORT = 5000;

app.get('/', (_req: express.Request, res: express.Response) => {
    res.json({message: "server is running!"});
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});