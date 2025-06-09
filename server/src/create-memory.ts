import 'dotenv/config'
import { Langbase } from 'langbase'
import logger from './logger'

const langbaseApiKey: string = process.env.LANGBASE_API_KEY || ''

const langbase = new Langbase({
    apiKey: langbaseApiKey
})

const main = async () => {
    const memory = await langbase.memories.create({
        name: 'knowledge-base',
        description: 'An AI memory for agentic memory, support flight Q&A',
        embedding_model: 'openai:text-embedding-3-large'
    })

    logger.info(`AI Memory created ${memory}`)
}

main()