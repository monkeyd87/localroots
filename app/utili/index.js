import {SignJWT,jwtVerify} from 'jose'


const genToken = async (payload)=>{
    const secert = new TextEncoder().encode(process.env.JWT_SECRET)
    const token = await new SignJWT(payload)
    .setProtectedHeader({alg:'HS256'})
    .sign(secert)

    return token
}

const verifyToken = async (token)=>{
    const secert = new TextEncoder().encode(process.env.JWT_SECRET)
    const {payload} = await jwtVerify(token,secert)
    console.log(payload)
    return payload

}


module.exports = {genToken,verifyToken}