/* eslint-disable*/
const fs = require('fs');
const http = require('http');
const path = require('path');
let querystring = require('querystring');
let defaultObj = { success: false, msg: "不存在" };
let readFile = (fileName, callback) => {
    setTimeout(() => {
        fs.readFile(path.resolve(__dirname, `../${fileName}/index.json`), 'utf8', (err, data) => {
            if (err) {
                console.log('失败', err.path);
                callback(JSON.stringify(defaultObj));
            } else {
                console.log('成功', fileName);
                callback(data.toString());
            }
        })
    }, 1000 * 1)
};


const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.setHeader("Access-Control-Allow-Origin", "http://payroll.test.xdf.cn");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,X-Requested-With,access-token,email,userid");
    res.setHeader("X-Powered-By", "3.2.1");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    if (req.url == '/favicon.ico') {
        res.end('favicon.ico');
    } else {
        if (req.url.indexOf('=') == -1 && req.url.indexOf('&') == -1) {
            var fileName = req.url.replace('?', '/');
        } else {
            var fileName = req.url.match(/^.*?[\=\&]/)[0].replace(/[\?\&][A-z]*[\=\&]/g, '').replace('?', '/');
        }
        readFile(fileName, (data) => {
            res.write(data)
            res.end();
        });

    }
});
app.listen(3124);
console.log("server run at port 3124");