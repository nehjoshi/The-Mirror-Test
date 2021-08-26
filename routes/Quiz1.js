const express = require("express");
const puppeteer = require('puppeteer');
const Path = require('path');

const Quiz1 = express.Router();

Quiz1.post("/quiz1", async (req, res) => {
    let { ans, result } = req.body;
    try {

        if (ans === "submit") {
            console.log('submit');
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setContent(`
            <h2 style="font-family: Helvetica">The Mirror Test</h2>
            <hr style="width: 100%; display: block; border: none; background-color: gray; height: 1px;  margin: 0 auto">
            <h3 style="font-family: Helvetica">Part 1: ACE Score: ${result}</h3>
            `);
            await page.emulateMediaType('screen');
            await page.pdf({
                path: 'hey.pdf',
                format: 'A4',
                printBackground: true
            })
            await browser.close();
            
            // res.download(Path.join(__dirname, '../', 'hey.pdf'), (err) => {
            //     console.log(err)
            // });
            return res.json({ result: result });
        }

        if (ans === 1) {
            result += 1;
            console.log(result);
            return res.json({ success: true, result: result });
        } else {
            return res.json({ success: true, result: result });
        }
    } catch (e) {
        console.log(e);
    }
});
module.exports = Quiz1;