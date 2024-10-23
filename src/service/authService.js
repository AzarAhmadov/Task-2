import { auth } from "../api/authEndPoint"

export const createUser = async (user) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/${auth.users}`, {
            method: "POST",
            body: JSON.stringify(user)
        })

        return res
    } catch (err) {
        console.log(err)
    }
}


export const removeStroge = () => {
    localStorage.removeItem('user')
    window.location.reload()
}