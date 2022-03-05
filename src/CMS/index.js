const express = require("express");
const router = express.Router();
const path = require('path')
const {contentfulClient} = require('../Database')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })


router.get("/", async function (req, res) {


    try {
        //req.params.emai
        const result= await contentfulClient.getEntry(process.env.CONTENTFULELADNINGPAGEID).then(function (entry) {
            // logs the entry metadata
            console.log(entry.fields);
    
            return(
                {
                    landingImage:entry.fields.landingImage.fields.file.url,
                    slogan:entry.fields.slogan,
                    youtube:entry.fields.youtube,
                    title:entry.fields.title,
                }
            )
          });
        res.status(200).send(result);
      } catch (err) {
        console.error(err);
        res.status(502).send(err);
      }
});


module.exports = router;