import {belongsTo, createServer, hasMany, Model } from "miragejs"

export const makeServer = () => {
    createServer({
        models: {
            pitch: Model.extend({
                timeslots: hasMany(),
                org: belongsTo()
            }),
            timeslot: Model,
            org: Model.extend({
                pitch: belongsTo()
            })
        },
        seeds(server) {
          
                    server.create("pitch", {
                        pitches: 2,
                        changing_rooms: 2,
                        lockers: "Yes",
                        benches: 1,
                        timeslots: [
                            server.create("timeslot", {
                                start_time: "8:00",
                                stop_time: "9:00",
                                price: 5000
                            }),

                            server.create("timeslot", {
                                start_time: "10:00",
                                stop_time: "11:00",
                                price: 5000
                            }),
                            server.create("timeslot", {
                                start_time: "12:00",
                                stop_time: "13:00",
                                price: 5000
                            }),
                            server.create("timeslot", {
                                start_time: "14:00",
                                stop_time: "15:00",
                                price: 5000
                            }),
                            server.create("timeslot", {
                                start_time: "16:00",
                                stop_time: "17:00",
                                price: 5000
                            }),
                            server.create("timeslot", {
                                start_time: "16:00",
                                stop_time: "17:00",
                                price: 5000
                            }),
                            server.create("timeslot", {
                                start_time: "17:00",
                                stop_time: "18:00",
                                price: 5000
                            }),

                            server.create("timeslot", {
                                start_time: "19:00",
                                stop_time: "20:00",
                                price: 5000
                            }),
                            server.create("timeslot", {
                                start_time: "20:00",
                                stop_time: "21:00",
                                price: 5000
                            }),
                            
                        ],
                        org: server.create("org", {
                            contact_number: "+2567712345678",
                            organization_email: "arenakla@gmail.com",
                            organization_location: "Kampala",
                            organization_name: "Arena Kla",
                        })
                    })
                
           
        },
        routes() {
            this.get("/api/orgs", (schema) => {
                // const org = schema.orgs.find(1);
                // const pitch = schema.pitches.find(1);
                // console.log(org);
                // console.log(schema.orgs.all());
                // console.log(org.pitches);
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
                return org.pitch;
            })
            this.get('/api/orgs/:id', (schema, request) => {
                const orgId = request.params.id
                const org = schema.orgs.find(orgId);
                // eslint-disable-next-line camelcase
                const {pitchId, organization_name} = org;
                // console.log(org.attrs);
                // eslint-disable-next-line camelcase
                return {pitchId, organization_name} ;
            })
            this.post('/api/orgs/:id/create',(schema, request) => {
                // eslint-disable-next-line prefer-const
                let orgId = request.params.id
                // eslint-disable-next-line prefer-const
                let org = schema.orgs.find(orgId);
                const attrs = JSON.parse(request.requestBody)
                // console.log(attrs);
                return org.createPitch(attrs)
            })

            this.get('/api/turf/:id/timeslots', (schema, request) => {
                const pitchId = request.params.id;
                const pitch = schema.pitches.find(pitchId);
                return pitch.timeslots;
            })

            // this.post('/api/turfs/:id/timeslot', (schema, request) => {
            //     const pitchId = request.params.id;
            //     const pitch = schema.pitches.find(pitchId);
            //     const attrs = JSON.parse(request.requestBody)
                
            //     return pitch.createTimeslots(attrs);
            // })

            // this.post("/api/add-turf", (schema, request) => {
            //     const body = JSON.parse(request.requestBody)
            //     const json = pitch.org
            //     console.log(body);
            //     return  schema.pitches.create(body)
            // })
        }
    });
}
