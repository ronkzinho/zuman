import { command, runCommand } from "../utils/command";

export default abstract class extends command{
    constructor(name, client){
        super(name, client)
        this.name = "ping"
        this.aliases = ["p"]
        this.description = `Comando para ver a latência do bot!`
        this.category = "utility"
    }
    async run({ message }: runCommand){
        /*const msg = await message.channel.send("Ping?")*/
        message.channel.send(`Pong! ${message.createdAt.getTime() - new Date().getTime()}ms`)
    }
}