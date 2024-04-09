import dbConnect from "@/Libs/db.connect";
import Template from "@/Models/User";

import { NextResponse } from "next/server";

const templateData = {
  title: "Professional Dog Trainer Services",
  tagline: "Transforming your dog's behavior through expert training",
  heroSectionImage: "https://images.alphacoders.com/128/1282480.jpg",
  btn1: "Get Started",
  description:
    "Our professional dog trainers are dedicated to providing effective and compassionate training for your canine companion.",
  ftitle1: "Positive Reinforcement Techniques",
  ftitle2: "Behavior Modification Programs",
  featureSectionImage1:
    "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg",
  featureSectionImage2:
    "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg",
  fdescription1:
    "Utilizing positive reinforcement to encourage desired behaviors and create a trusting bond between you and your dog.",
  fdescription2:
    "Customized behavior modification programs tailored to address specific issues such as aggression, anxiety, or excessive barking.",
  question1: "What training methods do you use?",
  question2: "Do you offer training for aggressive dogs?",
  question3: "How long does it take to see results from the training?",
  answer1:
    "We primarily use positive reinforcement techniques to teach and reinforce desired behaviors in dogs.",
  answer2:
    "Yes, our trainers specialize in behavior modification programs to address aggression and other behavioral issues.",
  answer3:
    "The timeline for seeing results varies depending on the dog and the specific training goals, but our trainers work efficiently to achieve noticeable improvements.",
};

export async function GET(req, res) {
  try {
    // Here it should fetch this template data from the mongoDB
    // const template = await Template.findOne({});
    return NextResponse.json({ templateData });
  } catch (error) {
    console.log("Error in StoreTemplateData route Handler", error);
  }
}

export async function POST(req, res) {
  try {
    dbConnect();
    const data = await req.json();
    const template = data.data;
    console.log("Logging in templateAPI", template, data);

    const findOne = await Template.findOne();
    if (findOne) {
      const templateData = await Template.findOneAndReplace({});
      return NextResponse.json({
        success: true,
        message: "Data created",
        data: templateData,
      });
    } else {
      const templateData = await Template.create({
        templateData: { template },
      });
      console.log("MongoDb template return object", templateData);
      return NextResponse.json({
        success: true,
        message: "Data created",
        data: templateData,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
