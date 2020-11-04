import { createServer, Model } from "miragejs"

export const makeServer = () => {
    createServer({
        models: {
            turfs: Model,
        },
        routes() {
            this.get("/api/turfs", (schema) => {
                return schema.turfs.all()
            })
        }
    });
}
