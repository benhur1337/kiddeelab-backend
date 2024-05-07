"use server"

import { unstable_noStore as noStore } from 'next/cache'

import { client } from '../lib/data'

export async function GET(){

    noStore()

    try{

        const db = client.db("kiddeelab-website")
        const staff = db.collection("staff")
        const items = await staff.find().toArray()

        return Response.json({items})

    } catch(err) {
        console.log(err)
    }
    
}