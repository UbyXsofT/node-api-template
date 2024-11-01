import Item from "../../models/Item.js";

// @desc    Ottieni tutti gli item
// @route   GET /api/items
// @access  Pubblico
export const getItems = async (req, res) => {
	try {
		const items = await Item.find();
		res.json({ message: "Versione API 1 - Lista degli item" });
		//res.json(items);
	} catch (error) {
		res.status(500).json({ message: "Errore del server" });
	}
};

// @desc    Crea un nuovo item
// @route   POST /api/items
// @access  Pubblico
export const createItem = async (req, res) => {
	try {
		const newItem = new Item({
			name: req.body.name,
			description: req.body.description,
		});
		const savedItem = await newItem.save();
		res.status(201).json(savedItem);
	} catch (error) {
		res.status(400).json({ message: "Dati non validi" });
	}
};
