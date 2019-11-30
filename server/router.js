const express = require('express')
const router = express.Router();
router.get('/',(req, res) => {
    res.send('server is running')
})
router.get('/route',(req, res) => {
    res.send('server is running in route')
})
module.exports = router;