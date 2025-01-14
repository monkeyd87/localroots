import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import {User} from '@/models/';
import { Next } from 'react-bootstrap/esm/PageItem';

export async function GET(req, { params }) {
  try {
    await dbConnect();

    // Safely access id from params
    const { id } = params;

    // Validate the id
    if (!id || id.length !== 24) {
      return NextResponse.json(
        { success: false, message: 'Invalid user ID' },
        { status: 400 }
      );
    }

    // Query database for the user
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: 'Server Error' },
      { status: 500 }
    );
  }
}

export async function PUT(req,{params}){
  try{
    // validate ID
    const {id} = params
    if(!id || id.length !== 24){
      return NextResponse.json(
        {success:false,message:'Invalid user ID'},
        {status:400}
      )
    }
    //  parse the request
    const body = await req.json()
    if(!body || Object.keys(body).length === 0 ){
      return NextResponse.json(
        {success:false, message:" No data provided"},
        {status:400}
      )
    }
    // find user by id and update
    const user = await User.findByIdAndUpdate(id,body,{
      new:true,
      runValidators:true
    })

    if(!User)return NextResponse.json(
      { success: false, message: 'User not found' },
      { status: 404 }
    )

    return NextResponse.json(
      {success:true,data:user},
      {status:200}
    )

  }catch(err){
    console.log(err)
    return NextResponse.json(
      {success:false,message:'server error'},
      {status:500}
    )
  }

}

export async function DELETE(req,{params}) {
  
    const body =  await req.json()
    const {id} = body
    console.log(id)

    // Validate the id
    if (!id || id.length !== 24) {
      return NextResponse.json(
        { success: false, message: 'Invalid user ID' },
        { status: 400 }
      );
    }

    const user = await User.findByIdAndDelete(id);
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }
    return NextResponse.json({suceess:true,message:"User has been deleted",data:user},{status:200})

  
}