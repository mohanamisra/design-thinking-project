function Mitra() {
    return (
        <div className="mitra-container" style={{ height: "90vh" }}>
            <h2>MIT-RA Web Chat</h2>
            <iframe
                src="/mitra.html"
                title="MIT-RA Chat"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "8px"
                }}
            />
        </div>
    );
}

export default Mitra;
