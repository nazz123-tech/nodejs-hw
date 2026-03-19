import { model, Schema } from "mongoose";

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
        enum:["Work", "Personal", "Meeting", "Shopping", "Ideas", "Travel", "Finance", "Health", "Important", "Todo"],
        default:"Todo",
      }
    },
    {
      timestamps: true
    },
);

export const Note = model('Note', noteSchema);
