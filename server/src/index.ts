/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "./prompt";
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const genai = new GoogleGenAI({});

app.use(express.json());

app.use(cors());

app.get("/", (_, res) => {
  res.send("Hello from Express + TypeScript server!");
});

app.get("/greetings", (_, res) => {
  res.status(200).send(`Hello there....greetings`);
});

app.post("/generate-content", async (req: any, res: any) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required." });
  }

  try {
    const response = await genai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
      config: {
        systemInstruction: {
          role: "system",
          parts: [{ text: SYSTEM_PROMPT }],
        },
      },
    });

    const resultText =
      response.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    res.json({ content: resultText });
  } catch (error) {
    console.error("Generation error:", error);
    res.status(500).json({ error: "Failed to generate content" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
