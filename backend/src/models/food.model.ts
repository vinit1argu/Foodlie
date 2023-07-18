import {Schema, model} from 'mongoose';

export interface Food{
    id:string;
    name:string;
    price:number;
   
    imageUrl: string;
    
    quantity: number;
}

export const FoodSchema = new Schema<Food>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
        
        imageUrl: {type: String, required:true},
        quantity: {type: Number, required:true}
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);



export const FoodModel = model<Food>('food', FoodSchema);