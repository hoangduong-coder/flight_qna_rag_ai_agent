import { runAiSupportAgent, runMemoryAgent } from "./agents";
import logger from "./logger";

const main = async (query: string) => {
    const chunks = await runMemoryAgent(query)

    const completion = await runAiSupportAgent({
        chunks,
        query,
    })

    logger.info(`Query: ${query}`)

    logger.info(`Response: ${completion}`)
}

main("What is the maximum carry-on weight?")