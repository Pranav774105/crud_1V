import axios from "axios"

const baseUrl = 'http://localhost:5000'

export const saveUserToDB = (userData) =>{
    const relUrl = baseUrl+'/users'
    return axios.post(relUrl, userData)
}

export const fetchUsersFromDB = () =>{
    const relUrl = baseUrl+'/users'
    return axios.get(relUrl)
}

export const fetchUserFromDB = (userId) => {
    const relUrl = `${baseUrl}/users/${userId}`
    return axios.get(relUrl)
}

export const updateUserFromDB = (userId, userData) => {
    const relUrl = `${baseUrl}/users/${userId}`
    return axios.put(relUrl, userData)
}

export const deleteUserFromDB = (userId) =>{
    const relUrl = `${baseUrl}/users/${userId}`
    return axios.delete(relUrl)
}