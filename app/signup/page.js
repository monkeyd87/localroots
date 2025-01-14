   'use client' 
    
    import {Card,Form, FormControl,Button} from "react-bootstrap"
    import {useState} from 'react'
    import { useRouter } from "next/navigation";


export default function SignupPage(){

  const router = useRouter()
  const [validated, setValidated] = useState(false)
  const [formData,setFormData] = useState(
    {firstName:"",
      lastName:"",
      email:"",
      password:""
    }
  )
  

  const handleSubmit = async(event)=>{

    const form = event.target
    console.log(form.checkValidity())
    if(form.checkValidity() === false){
      event.preventDefault();
      event.stopPropagation();
    }else{
      event.preventDefault()
      const res =  await fetch('/api/users',
        {
          headers:{
            'content-type':"application/json",
          },
          method:"POST",
          body: JSON.stringify(formData)
        }

      )
      const json =  await res.json()
      const data = json.data
      if(json.success){
        router.push('/home')
      }else{
        alert(json.message)
      }

    }

    setValidated(true)


  }

  async function handleForm (event){
    const {name,value} = event.target
    setFormData(prev=>({...prev,[name]:value}))


    
  }



   return( <div className="w-[100vw] h-[100vh] bg-slate-200 flex justify-center items-center">
        <Card className="shadow-md flex flex-col">
            <Card.Header>
                <Card.Title>Sign Up</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form noValidate onSubmit={handleSubmit} validated={validated}>
                  <div className="name flex gap-3">
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleForm}
        
                    />
                    <Form.Control.Feedback type="invalid">Please Provide First Name</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleForm}
                    />
                    <Form.Control.Feedback type={"invalid"}>Please Provide Last Name</Form.Control.Feedback>
                  </Form.Group>
                  </div>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleForm}
                    />
                    <Form.Control.Feedback type='invalid'>Please Provided Email</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      name="password"
                      value={formData.password}
                      onChange={handleForm}
                    />
                    <Form.Control.Feedback type="invalid">Please Provided Password</Form.Control.Feedback>
                  </Form.Group>
                    <Button className="" type="submit"  onSubmit={handleSubmit} style={{backgroundColor:'#2E7D32'}}>Submit</Button>
                </Form>

            </Card.Body>
            <Card.Footer className="flex justify-center">
            </Card.Footer>
        </Card>

    </div>)
}