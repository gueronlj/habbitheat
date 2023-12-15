const Login = ( {loginWithRedirect} ) => {
    
    return (
        <div className="content">
            <p>Please sign-in to continue</p>
            <button onClick={() => loginWithRedirect()}>Login</button>
        </div>
    )
}
export default Login