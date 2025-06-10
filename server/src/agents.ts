import "dotenv/config";
import { Langbase, MemoryRetrieveResponse } from "langbase";

const langbaseApiKey: string = process.env.LANGBASE_API_KEY || "";

const langbase = new Langbase({
  apiKey: langbaseApiKey,
});

export const getSystemPrompt = async (chunks: MemoryRetrieveResponse[]) => {
  let chunksText = "";
  for (const chunk of chunks) {
    chunksText += chunk.text + "\n";
  }
  const systemPrompt = `
        You're a helpful AI support agent. You will assist users with their queries about flight issues.
        Use only the context provided in the knowledge base to answer the user's question.
        For each response, provide the source in brackets like so: [1]
        At the end of your response, provide a list of sources used in the format: [1] filename.txt. Remember to use the correct filename with the corresponding number.
        If you don't know the answer, say "I don't know" and do not make up information. Ask the user to provide more context if necessary.

        Here is the context you can use to answer the user's question:
        ${chunksText}
    `;
  return systemPrompt;
};

export const runAiSupportAgent = async ({
  chunks,
  query,
}: {
  chunks: MemoryRetrieveResponse[];
  query: string;
}) => {
  const systemPrompt = await getSystemPrompt(chunks);
  const { completion } = await langbase.pipes.run({
    stream: false,
    name: "ai-support-agent",
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: query,
      },
    ],
  });

  return completion;
};

export const runMemoryAgent = async (query: string) => {
  const chunks = await langbase.memories.retrieve({
    query,
    topK: 5,
    memory: [
      {
        name: "knowledge-base",
      },
    ],
  });

  return chunks;
};
