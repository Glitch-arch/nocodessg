import OpenAI from "openai";
import { NextResponse, NextRequest } from "next/server";
// Title
// Description - 2
// Tagline
// Feature section - 2
// FAQ Questions and Answers

// const apiKey = import.meta.env.VITE_apiKey;
// console.log("api", apiKey);
const openai = new OpenAI({
  apiKey: "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",
});

const exampleJson = {
  title: "Professional Dog Trainer Services",
  descriptions: [
    "Our professional dog trainers are dedicated to providing effective and compassionate training for your canine companion.",
    "With years of experience and a deep understanding of dog behavior, our trainers offer personalized solutions to address any training challenges.",
  ],
  tagline: "Transforming your dog's behavior through expert training",
  features: [
    {
      feature1: "Positive Reinforcement Techniques",
      detail1:
        "Utilizing positive reinforcement to encourage desired behaviors and create a trusting bond between you and your dog.",
    },
    {
      feature2: "Behavior Modification Programs",
      detail2:
        "Customized behavior modification programs tailored to address specific issues such as aggression, anxiety, or excessive barking.",
    },
  ],
  faqs: [
    {
      question1: "What training methods do you use?",
      answer1:
        "We primarily use positive reinforcement techniques to teach and reinforce desired behaviors in dogs.",
    },
    {
      question2: "Do you offer training for aggressive dogs?",
      answer2:
        "Yes, our trainers specialize in behavior modification programs to address aggression and other behavioral issues.",
    },
    {
      question3: "How long does it take to see results from the training?",
      answer3:
        "The timeline for seeing results varies depending on the dog and the specific training goals, but our trainers work efficiently to achieve noticeable improvements.",
    },
  ],
};

async function GPT(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a asistant which provide to the point information and in JSON formate. Need the data for content writting for a website.",
        },
        {
          role: "system",
          content:
            "Provide me a JSON data like this" + JSON.stringify(exampleJson),
        },
        {
          role: "user",
          content: `Give me a title , 2 description, a Tagline , 2 Features and there single line detail , and 3 Faq question and there single line Answers in JSON formate about the topic ${prompt}.`,
        },
      ],
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
      // temperature: 0.1,
      // max_tokens: 120,
    });
    let gptData = completion.choices[0].message.content;

    return gptData;
  } catch (error) {
    console.log("Error in Gpt Config", error);
  }
}

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const prompt = searchParams.get("prompt");
    // const payload = await req.json();
    // const prompt = payload.prompt;
    console.log("prompt in server", prompt);
    const gptRes = await GPT(prompt);
    console.log("gptRes", gptRes);
    console.log(typeof gptRes);
    return Response.json({ gptRes });
  } catch (error) {
    console.log("Server side logic Failed ", error);
  }
}
