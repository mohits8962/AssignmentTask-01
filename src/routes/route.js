const express = require('express')
const router = express.Router()
const customerController = require('../controllers/CustomerController')
const cardController = require('../controllers/CardController')


// customer routes
router.get('/getAllCustomers', customerController.getAllCustomers)
router.delete('/deleteCustomer/:customerID', customerController.deleteCustomer)
router.post('/createCustomer', customerController.createCustomer)


// card routes
router.get("/getCards", cardController.getCards)
router.post("/createCard", cardController.createCard)


module.exports = router;