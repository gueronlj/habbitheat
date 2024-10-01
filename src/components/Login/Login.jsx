import { useAuth0 } from '@auth0/auth0-react';

const Login = ( ) => {

    const { loginWithRedirect, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="content">
                <p>Please sign-in to continue</p>
                <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
        )
    }
}
export default Login