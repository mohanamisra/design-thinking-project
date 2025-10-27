import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("MIT-RA backend is running 🚀");
});

console.log("IBM API URL:", process.env.IBM_API_URL);
console.log("IBM API KEY:", process.env.IBM_API_KEY ? "Loaded ✅" : "Missing ❌");


app.post("/api/mitra", async (req, res) => {
    try {
        // STEP 1 — Get IAM access token
        const iamRes = await fetch("https://iam.cloud.ibm.com/identity/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                grant_type: "urn:ibm:params:oauth:grant-type:apikey",
                apikey: process.env.IBM_API_KEY,
            }),
        });

        const iamData = await iamRes.json();
        if (!iamRes.ok) {
            throw new Error(iamData.errorMessage || "Failed to get IAM token");
        }

        const token = iamData.access_token;

        // STEP 2 — Call the IBM API with the token
        const watsonRes = await fetch(process.env.IBM_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                input: req.body.input || "Hello from MIT-RA!",
            }),
        });

        const watsonData = await watsonRes.json();
        res.json(watsonData);

    } catch (error) {
        console.error("Error calling IBM API:", error);
        res.status(500).json({ error: error.message });
    }
});

app.post("/api/feedback", async (req, res) => {
    const { email, feedback } = req.body;

    if (!feedback) {
        return res.status(400).json({ error: "Feedback is required" });
    }

    try {
        // Configure transporter
        const transporter = nodemailer.createTransport({
            service: "gmail", // or "outlook", "yahoo", etc.
            auth: {
                user: process.env.FEEDBACK_SENDER_EMAIL,
                pass: process.env.FEEDBACK_SENDER_PASS,
            },
        });

        const mailOptions = {
            from: process.env.FEEDBACK_SENDER_EMAIL,
            to: process.env.FEEDBACK_RECEIVER_EMAIL, // your email
            subject: "New MIT-RA Chatbot Feedback",
            text: `Feedback: ${feedback}\n\nFrom: ${email || "Anonymous"}`,
        };

        await transporter.sendMail(mailOptions);
        console.log("📨 Feedback email sent!");
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
