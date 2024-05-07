"use server"

import { unstable_noStore as noStore } from 'next/cache'

import { client } from '../lib/data'

export async function GET(){

    noStore()

    try{

        const db = client.db("kiddeelab-website")
        const announcements = db.collection("announcements")
        const items = await announcements.find().toArray()

        return Response.json({items})

    } catch(err) {
        console.log(err)
    }
    
}