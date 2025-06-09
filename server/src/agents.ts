import 'dotenv/config';
import { Langbase } from 'langbase';

const langbaseApiKey: string = process.env.LANGBASE_API_KEY || '';

const langbase = new Langbase({
    apiKey: langbaseApiKey
});

export const runMemoryAgent = async (query: string) => {
    const chunks = await langbase.memories.retrieve({
        query,
        topK: 5,
        memory: [
            {
                name: 'knowledge-base'
            }
        ]
    })

    return chunks
}