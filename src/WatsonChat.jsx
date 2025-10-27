import { useEffect } from "react";

function WatsonChat() {
    useEffect(() => {
        window.watsonAssistantChatOptions = {
            integrationID: import.meta.env.VITE_WATSON_INTEGRATION_ID,
            region: import.meta.env.VITE_WATSON_REGION,
            serviceInstanceID: import.meta.env.VITE_WATSON_SERVICE_INSTANCE_ID,
            onLoad: async (instance) => { await instance.render(); },
        };

        const script = document.createElement("script");
        script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WebChatEntry.js";
        document.head.appendChild(script);

        return () => {
            // Cleanup on unmount
            document.head.removeChild(script);
        };
    }, []);

    return null; // nothing visible, just loads chat
}

export default WatsonChat;
