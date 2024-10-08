export const update = async (req, res) => {
    try {
    const content = await Animal.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json(content);
    } catch (error) {
    res.status(400).send(error);
    }
    };