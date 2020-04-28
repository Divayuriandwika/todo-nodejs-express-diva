const express = require ("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/", require("./routes"));
app.use("/users", require("./routes/users"));
app.use("/todos", require("./routes/todos"));

app.listen(3003, () => {
    console.log("PORT is listen on PORT : 3003");
    
});