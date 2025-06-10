import 'dotenv/config';
import { Langbase } from 'langbase';
import logger from './logger';

const langbaseApiKey: string = process.env.LANGBASE_API_KEY || '';

const langbase = new Langbase({
  apiKey: langbaseApiKey,
});

const createPipeAgent = async () => {
    const supportAgent = await langbase.pipes.create({
        name: 'ai-support-agent',
        description: 'An AI agent to support users with their queries',
        messages: [
            {
                role: 'system',
                content: `You are a helpful AI assistant that provides support to users about flight inquires. 
                Always ensure that you provide accurate and to the point information. 
                If you do not know the answer, politely inform the user that you are unable to assist with that query.`,
            }
        ]
    })
    logger.info(`Support agent: ${supportAgent}`);
}

createPipeAgent()