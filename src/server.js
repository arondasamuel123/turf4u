import { belongsTo, createServer, hasMany, Model } from "miragejs"

export const makeServer = () => {
    createServer({
        models: {
            pitch: Model.extend({
                org: belongsTo()
            }),
            org: Model.extend({
                pitches: hasMany()
            })
        },
        // seeds(server) {
        //     const arenaKla = server.create("org", {name: "Arena Kampala Ltd"})
        //     server.create("pitch",{
        //         pitch_name: "Arena Kampala",
        //         location: "Kampala",
        //         org:arenaKla
        //     })

        //   const turf1 =  server.create("pitch",{
        //         pitch_name: "Arena 256",
        //         location: "Kampala",
        //         org:arenaKla
        //     })
        //     console.log(turf1);
        // },
        routes() {
            this.get("/api/pitches", (schema) => {
                return schema.pitches.all()
              })
            this.get("/api/orgs", (schema) => {
                return schema.orgs.all()
            })
            this.post("/api/create-org", (schema, request) => {
                const body = JSON.parse(request.requestBody)
                return schema.orgs.create(body);
            })

            this.post("/api/add-turf", (schema, request) => {
                const body = JSON.parse(request.requestBody)
                return  schema.pitches.create(body)
            })
        }
    });
}
