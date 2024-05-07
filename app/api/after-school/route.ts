"use server"

import { unstable_noStore as noStore } from 'next/cache'

import { client } from '../lib/data'

export async function GET(){

    noStore()

    try{

        const db = client.db("kiddeelab-website")
        const activities = db.collection("after-school")
        const items = await activities.find().toArray()

        return Response.json({items})

    } catch(err) {  
        console.log(err)
    }
    
}