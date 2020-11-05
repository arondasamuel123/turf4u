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

            this.post("/api/add-turf", (schema, request) => {
                const body = JSON.parse(request.requestBody)
                return  schema.turfs.create(body)
            })
        }
    });
}
