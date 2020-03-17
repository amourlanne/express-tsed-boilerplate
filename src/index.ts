import {createConnection} from "typeorm";
import server from "./server";

async function bootstrap () {
    try {
        await createConnection();
        server.listen(3000, () => {
            console.log('app listening on port 3000!')
        });
    } catch (error) {
        console.error(error);
    }
}

bootstrap();
