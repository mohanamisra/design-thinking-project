import { useState } from "react";

function Mitra() {
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAPICall = async () => {
        setLoading(true);
        setResponse("");

        try {
            const res = await fetch("https://api.ibm.com/watsonx/orchestrate/v1/whatever-endpoint", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer YOUR_IBM_API_KEY",
                },
                body: JSON.stringify({
                    // Request body here, depending on the endpoint
                    input: "Hello Watson Orchestrate!"
                }),
            });

            const data = await res.json();
            setResponse(JSON.stringify(data, null, 2));
        } catch (err) {
            setResponse(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mitra-container">
            <h2>IBM Watson Mitra Integration</h2>
            <button onClick={handleAPICall} disabled={loading}>
                {loading ? "Loading..." : "Call API"}
            </button>
            <pre className="api-response">{response}</pre>
        </div>
    );
}

export default Mitra;
