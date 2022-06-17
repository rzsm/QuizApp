import React from "react";

export default function useHttp() {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    
    const sendRequest = React.useCallback(async (requestConfig, applyData) => {
        setLoading(true)
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ?? 'GET',
                headers: requestConfig.headers ?? {},
                body: JSON.stringify(requestConfig.body) ?? null
            })

            if (!response.ok) throw new Error("Request Failed!")

            const data = await response.json()
            applyData(data)

        } catch (error) {
            setError(error.message || "Something went wrong!")
        }
        setLoading(false)
    }, [])

    return {
        loading,
        error,
        sendRequest
    }
}

