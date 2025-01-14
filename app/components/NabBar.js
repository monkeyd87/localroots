"use client"
import {Navbar,Nav,Form,InputGroup} from 'react-bootstrap'
export default function NavBar(){
    return(
        <Navbar expand='lg' bg='white' className=' flex justify-between'>
            <Navbar.Brand>LocalRoots</Navbar.Brand>
                    <Form className=' hidden md:block w-[60%]'>
                        <InputGroup className='' size='sm'  >
                            <InputGroup.Text className='' style={{backgroundColor:'#2E7D32',color:'white'}}>search</InputGroup.Text>
                            <Form.Control className=''/>
                        </InputGroup>
                    </Form>
            <div className=''>
                <Navbar.Toggle  aria-controls="basic-navbar-nav"/>

                <Navbar.Offcanvas id="basic-navbar-nav">
                    <Nav className=' mr-3'>
                        <Nav.Link>Sign In</Nav.Link>
                        <Nav.Item className='flex items-center'>🛒</Nav.Item>
                    </Nav>
                </Navbar.Offcanvas>

            </div>
        </Navbar>
    )
}