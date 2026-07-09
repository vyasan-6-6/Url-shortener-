import mongoose from 'mongoose';

const clickSchema = new mongoose.Schema(
  {
    urlId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Url',
      required: true
    },
    browser: {
      type: String,
      default: 'Unknown'
    },
    ip: {
      type: String,
      default: 'Unknown'
    },
    referrer: {
      type: String,
      default: 'Direct'
    },
    clickedAt: {
      type: Date,
      default: Date.now
    }
  }
);

// Index on urlId for high-performance retrieval of analytics for a specific link
clickSchema.index({ urlId: 1 });

const Click = mongoose.model('Click', clickSchema);
export default Click;
