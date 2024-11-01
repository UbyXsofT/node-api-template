import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`MongoDB connesso: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Errore di connessione: ${error.message}`);
		//res.status(500).json({ message: "Errore del server" });
		process.exit(1); // Termina l'applicazione in caso di errore
	}
};

export default connectDB;
