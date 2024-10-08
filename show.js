export const show = async (req, res) => {
    try {
    const content = await Animal.findById(req.params.id).exec();
    res.json(content);
    } catch (error) {
    res.status(400).send(error);
    }
    };