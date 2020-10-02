const Joi = require("Joi");
const express = require("express");
const app = express();

// Enable Parsing JSON object
app.use(express.json());

const subscribers = [];

// -------------------------------------------- HTTP GET request ---------------------------------
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/event", (req, res) => {
  console.log("Event Data", req.body);
});

// -------------------------------------------- HTTP POST request ------------------------------

app.post("/subscribe/:topic", (req, res) => {
  console.log(req.body);

  const new_sub = {
    topic: req.params.topic,
    eventUrl: req.body.url,
  };
  subscribers.push(new_sub);
  res.send(new_sub);
});

app.post("/publish/:topic", (req, res, next) => {
  // console.log(req.body);
  // find all subscribers from the subscribe array
  // that has subscribed to this topic
  const eventSubscribers = subscribers.filter((subscriber) => {
    return subscriber.topic === req.params.topic;
  });

  eventSubscribers.forEach((subscriber) => {
    console.log("Subscriber", subscriber);
    req.url = subscriber.eventUrl;
    req.method = "GET";
    req.body.topic = req.params.topic;
    console.log("request url", req.url);
    console.log("request body", req.body);

    // request forwarding to the subscribed event url
    app._router.handle(req, res, next);
  });

  res.write("Event Published Successfully");

  res.end();
});

// Assign a PORT enviroment variable
const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
