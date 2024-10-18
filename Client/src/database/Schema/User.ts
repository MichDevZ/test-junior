import mongoose, {Schema, model, Model} from 'mongoose';
import { IUser } from '../../interface/User';


const userSchema = new Schema({

    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true},
    address: {type: String, required: true},
},{
    timestamps: true,
})


const User: Model<IUser> = mongoose.models.User || model('User', userSchema);

export default User