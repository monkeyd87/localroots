'use client'
import { Card,Button } from "react-bootstrap"


 export default function  ProductCard ({src,price,name,weight,stock}){
    return (
        <Card className="border-0   shadow-md" >
            <div className="relative">
              <Card.Img className="w-full h-auto " src={src}/>
                <Button className="" style={{position:'absolute',top:0,right:0}}>Add</Button>
            </div>

            
            <Card.Body>
              <div>
                <Card.Title>{price}</Card.Title>
              </div>
              <div>
                <Card.Subtitle className="text-muted">{name}</Card.Subtitle>
              </div>
              
            </Card.Body>
        </Card>
    )
}

