export const destroy = async (req, res) => {
    try {
    const content = await Filme.findByIdAndDelete(req.params.id).exec();
    res.json(content);
    } catch (error) {
    res.status(400).send(error);
    }
    };