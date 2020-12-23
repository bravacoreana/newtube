import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  videoFile: {
    type: String,
    required: "Video File URL is required",
  },
  thumbnailFile: {
    type: String,
    required: "Thumbnail File URL is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("Video", VideoSchema);

export default model;