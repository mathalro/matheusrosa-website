import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const APP_URL = "https://jq46gnahr6.execute-api.eu-west-1.amazonaws.com/prod/articles";

app.get('/api', (req, res) => res.send('Hello World!'));

app.get('/api/articles', async (req, res) => {
    try {
        const response = await axios.get(APP_URL);
        console.log(response.data);
        if (response) {
            res.status(200).send(response.data);
        }

    } catch (error) {
        res.status(500).send('Error');
        console.log(error);
    }
});

app.listen(3000, () => console.log(`App running on port 3000.`));