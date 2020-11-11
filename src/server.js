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
        seeds(server) {
            server.create("org",{
                contact_number: "+2567712345678",
                organization_email: "arenakla@gmail.com",
                organization_location: "Kampala",
                organization_name: "Arena Kla",
                pitches: [
                    server.create("pitch", {
                        pitches: 2,
                        changing_rooms: 2,
                        lockers_available: "Yes",
                        benches: 1
                    })
                ]
            })
        },
        routes() {
            this.get("/api/orgs", (schema) => {
                return schema.orgs.all()
            })
            this.post("/api/create-org", (schema, request) => {
                const body = JSON.parse(request.requestBody)
                return schema.orgs.create(body);
            })
            this.get('/api/orgs/:id/turfs',(schema, request) => {
                // eslint-disable-next-line prefer-const
                let orgId = request.params.id;
                // eslint-disable-next-line prefer-const
                let org = schema.orgs.find(orgId);
                return org.pitches;
            })
            this.get('api/orgs/:id', (schema, request) => {
                const orgId = request.params.id
                const org = schema.orgs.find(orgId);
                return org;
            })
            // this.get('/api/orgs/:id/create',(schema, request) => {
            //     // eslint-disable-next-line prefer-const
            //     let orgId = request.params.id
            //     // eslint-disable-next-line prefer-const
            //     let org = schema.orgs.find(orgId);
            //     const attrs = JSON.parse(request.requestBody)
            //     org.CreatePitch(attrs)
            //     org.save();
            // })

            // this.post("/api/add-turf", (schema, request) => {
            //     const body = JSON.parse(request.requestBody)
            //     return  schema.pitches.create(body)
            // })
        }
    });
}
