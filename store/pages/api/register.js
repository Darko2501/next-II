import { addProduct } from "@/services/productservices";

export default async function handler(req, res) {
    try {
        await addProduct(req.body.title, req.body.price, req.body.description);
        res.status(200).send('success');
    } catch (error) {
        res.status(500).send('Error adding product');
    }
}
