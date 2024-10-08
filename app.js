import e from 'express';
import "dotenv/config";
import routerUser from '/routers/routerUser';
import routerFilme from '/routers/routerFilme';
import routerIngresso from '/routers/routerIngresso';

const app = e();

app.use(e.json());

app.use("/user", routerUser);
app.use("/filme", routerFilme);
app.use("/ingresso", routerIngresso);

app.listen(process.env.API_PORT, () => console.log("Servidor pet auth executando na porta " + process.env.API_PORT));