import "dotenv/config";
import { Langbase } from "langbase";
import { readFile, readdir } from "fs/promises";
import path from "path";
import logger from "./logger";

const langbaseApiKey: string = process.env.LANGBASE_API_KEY || ''

const langbase = new Langbase({
  apiKey: langbaseApiKey
});

const uploadDocs = async () => {
    const cwd = process.cwd();
    const memoryName = "knowledge-base";
    const documentsDir = path.join(cwd, "../documents");

    const files = await readdir(documentsDir)

    for (const file of files) {
        const document = await readFile(path.join(cwd, "../documents", file))
        const content = file.split(".html")[0]
        const agentUploadResult = await langbase.memories.documents.upload({
            memoryName,
            contentType: "text/plain",
            documentName: file,
            document,
            meta: { category: "Support", topic: content}
        })

        if (agentUploadResult.ok) {
            logger.info(`Document ${file} uploaded successfully.`);
        } else {
            logger.error(`Failed to upload document ${file}`);
        }
    }
};

uploadDocs()