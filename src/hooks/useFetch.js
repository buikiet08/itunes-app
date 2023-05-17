import { useEffect, useState } from "react"

export const useFetch = (promise, dependencyList = []) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [status, setStatus] = useState('idle')


    useEffect(() => {
        fetchData()
    }, dependencyList)


    const fetchData = async (...data) => {
        try {
            setLoading(true)
            setStatus('pending')
            const res = await promise(...data)
            setData(res.data)
            setStatus('success')
        } catch (err) { 
            setError(err)
            setStatus('error')
        }
        finally {
            setLoading(false)
        }
    }

    return {
        loading,
        error,
        data,
        status
    }
}