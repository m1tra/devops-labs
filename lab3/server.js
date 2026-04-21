// server.js
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <html>
            <body>
                <h1>Search: ${query.q || ''}</h1>
            </body>
        </html>
    `);
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});