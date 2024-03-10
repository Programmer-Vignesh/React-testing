import React from 'react'

function Login() {
  return (
    <>
        <form>
            <div>
            {/* <label htmlFor='username'>userName</label> */}
            <input id='username' type='text'/>
            </div>
            <div>
            {/* <label htmlFor="password">Password</label> */}
            <input id='password' type='password'/>
            </div>
            <div>
                <label>
                    <input type='checkbox' id='terms'>I agree to the terms and conditions</input>
                </label>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </>
  )
}

export default Login