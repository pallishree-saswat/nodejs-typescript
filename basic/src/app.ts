import express from "express"
import config from 'config'
import connect from "./utils/connect"
import logger from "./utils/logger"

const app = express()

const port = config.get<number>("port")

app.get('/',(req,res) => {
    res.send("hjhhhkjk")
})
app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);
    await connect(  )
})

