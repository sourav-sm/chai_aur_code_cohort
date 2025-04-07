import http from 'http';
import { env } from './env';
import {logger} from './logger';
import {createApp} from './app'

async function main() {
    try{
        // const PORT:number=+(process.env.PORT ?? 8000);
        const PORT:number=+(env.PORT ?? 8000);//here importing typesafety env file
        const server=http.createServer(createApp());

        server.listen(PORT,()=>{
            logger.info(`server is running on PORT ${PORT}`)
        });
    }catch(err){
        logger.error(`Error starting server`,err);
    }
}

main();
