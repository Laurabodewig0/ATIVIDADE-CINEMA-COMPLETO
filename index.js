export const index = async (req, res) => {
    try {
    const content = await Animal.find(req.query).exec();
    res.json(content);
    } catch (error) {
    res.status(400).send(error);
    }
    };