const app = require('./index').app;

app({}, { end: v => console.info(v) });
