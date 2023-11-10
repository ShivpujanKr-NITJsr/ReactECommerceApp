import { useState } from "react";
import { Form, FormLabel,Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const SignUp = (props) => {


    const [grinput, setGrinput] = useState({  email: '', password: '' })


    
    const emailHandler = (event) => {
        event.preventDefault()
        const t = event.target.value
        setGrinput({ ...grinput, email: t })

    }
    const passwordHandler = (event) => {
        event.preventDefault()
        const t = event.target.value
        setGrinput({ ...grinput, password: t })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        console.log(grinput, ' grinput')
        submitting(grinput)
    }
    async function submitting(grinput) {
        // const reponse = await fetch('https://react-http-76942-default-rtdb.firebaseio.com/contactdetails.json', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(grinput)
        // })

        // const data = await reponse.json()

        // console.log(data + ' submitted')
        alert('loginned')
        setGrinput({  email: '', password: '' })
    }

    return <div style={{ margin: 'auto', border: '5px', width: '20rem' }} >

        <Form onSubmit={submitHandler} style={{ margin: 'auto', textAlign: "center", padding: '5px', width: '20rem' }} className="d-flex flex-column">
            
            <FormLabel>
                Email
            </FormLabel>
            <input type="email" onChange={emailHandler} value={grinput.email} id="email" required></input>
            <FormLabel>
                Your Password
            </FormLabel>
            <input type="password" onChange={passwordHandler} id="phone" value={grinput.tel} required></input>
            <Button type='submit' className="mx-5 my-2">Sign In</Button>
            <NavLink to='/login'>Login with existing account</NavLink> 
        </Form>
    </div>
}

export default SignUp;