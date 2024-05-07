import axios from 'axios';
import  router  from '../router/router';


// Sign in
export const SignInUser = async (username: String, password: String) => {

    try {

        const response = await axios.post('api/v1/login/', {
            username: username,
            password: password
        });

        sessionStorage.setItem('token', JSON.stringify(response.data.jwt));
        sessionStorage.setItem('userData', JSON.stringify(response.data.data));

        await router.push('/dashboard');

        return true;

    } catch (error) {
        return false;
    }


}




// Sign out
export const SignOutUser = async () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userData');

    await router.push('/');
}