import  request from "supertest"
import { Express } from "express";
import { createApp } from "../app"


describe('/api/users',()=>{
    let app: Express;
    beforeAll(()=>{
        app = createApp();
    })

    it("shold return the empty array ",async()=>{
        const response =await request(app).get("/api/users");
        expect(response.body).toStrictEqual([]);
    })
})