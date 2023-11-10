import { useContext, useRef } from "react"
import cartContext from "../store/cart-context";



const ProfileForm=()=>{

    const newPasswordInputRef =useRef();

    const authContext=useContext(cartContext)

    const submitHandler=event=>{
        event.preventDefault();

        const enteredNewPassword=newPasswordInputRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBhfCmRXqTgnJ-C0hRQAcj0bOv5hhqTioA',{
            method:'POST',
            body: JSON.stringify({
                idToken:authContext.token,
                password:enteredNewPassword,
                returnSecureToken:false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=>{

        })
    }

    return (
        <form onSubmit={submitHandler} style={{margin:'auto',textAlign:"center"}}>
            <div>
                <label htmlFor="new-password">
                    New Password
                </label><br></br>
                <input className="my-2" type="password" id="new-password" minLength={7} ref={newPasswordInputRef} />
            </div>
            <div>
                <button>Change Password</button>
            </div>
        </form>
    )
}

export default ProfileForm