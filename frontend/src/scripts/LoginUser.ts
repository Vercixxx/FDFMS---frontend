import axios from 'axios';

export const SignInUser = async (username: String, password: String) => {

    try {

        const response = await axios.post('api/v1/login/', {
            username: username,
            password: password
        });

        sessionStorage.setItem('token', JSON.stringify(response.data.jwt));
        sessionStorage.setItem('userData', JSON.stringify(response.data.data));

        return true;

    } catch (error) {
        return false;
    }


}