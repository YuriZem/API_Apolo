const app = require('./app');
const PORT = process.env.PORT || 3334;
// const PORT = 3333

const cors=require("cors");
const corsOptions ={
   origin:'http://localhost', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.listen(PORT,() => console.log(`Servidor rodando na porta ${PORT}`));
