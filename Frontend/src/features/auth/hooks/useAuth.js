import { useContext, useEffect } from "react";
import { AuthContext } from "../../../App.jsx";
import { login, register, logout, getMe } from "../services/auth.api.js";



export const useAuth = () => {

    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context


    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        try {
            const response = await login({ email, password })
            const userData = response.data?.user
            if (userData) {
                setUser(userData)
            }
        } catch (err) {
            console.error("Login error:", err)
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        try {
            const response = await register({ username, email, password })
            const userData = response.data
            if (userData) {
                setUser(userData)
            }
        } catch (err) {
            console.error("Register error:", err)
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
            const data = await logout()
            setUser(null)
        } catch (err) {

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        const getAndSetUser = async () => {
            try {
                const response = await getMe()
                const userData = response.data
                if (userData) {
                    setUser(userData)
                }
            } catch (err) {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        getAndSetUser()

    }, [])

    return { user, loading, handleRegister, handleLogin, handleLogout }
}