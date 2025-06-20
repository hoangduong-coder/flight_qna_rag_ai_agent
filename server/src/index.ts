import express, { Request, Response } from "express";
import { runMemoryAgent, runAiSupportAgent } from "./agents";
import logger from "./logger";
import {v4} from "uuid"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/health", (req: Request, res: Response) => {
  res.send("Welcome to the AI Support Agent API");
});

app.post("/api/chat", async (req: Request, res: Response) => {
  try {
    const { query, sendTime } = req.body;
    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }
    const chunks = await runMemoryAgent(query);

    const completion = await runAiSupportAgent({
      chunks,
      query,
    });

    logger.info(`Query: ${query}`);

    logger.info(`Response: ${completion}`);

    res
      .status(201)
      .json({
        id: v4(),
        sendTime: sendTime,
        human: query,
        ai: completion,
        responseTime: new Date(),
      });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
