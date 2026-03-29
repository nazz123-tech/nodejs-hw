import { model, Schema } from "mongoose";
import { TAGS } from "../constants/tags.js";


const noteSchema= new Schema(
    {
      title:{
        trim:true,
        required:true,
        type:String,
      },
      content:{
        type:String,
        default:'',
        trim:true,
      },
      tag:{
        type:String,
        enum:TAGS,
        default:"Todo",
      },
      userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    },
    {
      timestamps: true
    },
);
noteSchema.index({ title: "text", content: 'text'});

export const Note = model('Note', noteSchema);
