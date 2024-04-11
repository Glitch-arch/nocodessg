import mongoose, { Schema } from "mongoose";

const templateSchema = new Schema({
  templateData: {
    type: Object,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Template =
  mongoose.models.template || mongoose.model("template", templateSchema);
export default Template;
