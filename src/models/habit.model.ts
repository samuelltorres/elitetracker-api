import { Schema, model } from 'mongoose';

const HabitSchema = new Schema(
	{
		name: {
			type: String,
			require: true,
		},
		completedDates: {
			type: [Date],
		},
	},
	{
		versionKey: false,
		timestamps: true, // createdAt e updatedAt automaticamente
	},
);

export const habitModel = model('Habit', HabitSchema);
