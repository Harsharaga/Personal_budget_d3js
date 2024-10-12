// Budget API

const express = require('express');
const app = express();
const port = 3000;

app.use("/",express.static("public"));

const budget = {
    "myBudget": [
        {
            "title": "Take Out",
            "budget": 150
        },
        {
            "title": "Rent",
            "budget": 450
        },
        {
            "title": "Grocery",
            "budget": 200
        },
        {
            "title": "Phone Bill",
            "budget": 54
        },
        {
            "title": "Shopping",
            "budget": 50
        },
        {
            "title": "Trip",
            "budget": 400
        }
    ]
}

const savings ={
    "mySavings":[
        {
            "title": "Savings for home",
            "savings": 500
        },
        {
            "title": "Savings for misc",
            "savings": 200
        },
        {
            "title": "Savings for healthcare",
            "savings": 1000
        },
        {
            "title": "Savings for emergency",
            "savings": 400
        },
        {
            "title": "Savings for education",
            "savings": 600
        },
        {
            "title": "Savings for gifts",
            "savings": 100
        }
    ]
}


console.log(budget)



app.get("/budget", (req,res) => {
    res.json(budget);
})

app.get("/savings", (req,res) => {
    res.json(savings);
})

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});