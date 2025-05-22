import mongoose, { Schema, Document, Model } from 'mongoose';

interface IRegister extends Document {
  name: string;
  email: string;
  usn: string;
  branch: string;
  semester: string;
}

const RegisterSchema: Schema<IRegister> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    usn: { type: String, required: true },
    branch: { type: String, required: true },
    semester: { type: String, required: true },
  },
  { timestamps: true }
);

const Register: Model<IRegister> =
  mongoose.models.Register || mongoose.model<IRegister>('Register', RegisterSchema);

export default Register;
