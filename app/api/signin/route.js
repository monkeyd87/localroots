import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import {User} from '@/models/';
import {genToken} from '@/utili'





export async function POST(req) {
    await dbConnect()
    try{
        const body  =  await req.json()
        const {password,email} = body
            
        const user = await User.findOne({email:email})

        if(!user){
        return NextResponse.json({seccess:false,message:'User not found.'},{status:400})
        }
            const isPasswordCorrect =  await user.isCorrectPassoword(password)
        if(!isPasswordCorrect ){

            return NextResponse.json({success:false,message:'Wrong credential'})
         }
         const {id,firstName,lastName} = user
         const payload = {email,firstName,lastName}
         const token =  await genToken(payload)
         console.log("token:",token)

         
        const res =  NextResponse.json({success:true,message:"login success"},{status:200})
         res.cookies.set('token', token, { httpOnly: true, secure: false, path: '/' })
         return res
    

    


    }catch(err){
       return  NextResponse.json({success:false,message:'server error'},{status:500})
    }

}