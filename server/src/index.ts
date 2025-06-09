import { runMemoryAgent } from "./agents";
import logger from "./logger";

const main = async (query: string) => {
    const chunks = await runMemoryAgent(query)
    logger.info(`Memory chunk: ${chunks}`)
}

main("What is the maximum carry-on weight?")