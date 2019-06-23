import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            stuNumber: newUser.stuNumber,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
        })
        .then(res => {
            console.log('Registered!')
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            stuNumber: user.stuNumber,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

