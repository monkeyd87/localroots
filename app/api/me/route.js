import {User} from '@/models'
import { NextResponse } from 'next/server'


export async function GET(req) {
    try{
        const token =  req.cookies.token
       console.log(token)
        return NextResponse.json({message:'this is a text'})
    }catch(err){
        console.log(err)
        return NextResponse.json({message:err})
    }

}