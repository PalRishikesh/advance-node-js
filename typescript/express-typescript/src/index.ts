
import {createApp} from "./app"

const app = createApp();

const PORT = 3000;


app.listen(PORT, ()=>{
    console.log(`Running on Port ${PORT}`);
})


// npm i -D jest
// npm i -D ts-jest @types/jest
// npx ts-jest config:init

