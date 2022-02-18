const router = require("express").Router();
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51Jmj5KJ3cx4uHAYgFLznVeSassCwHtotCJt55bBxo5oPEI9C4D5xhWT1FbP7ARU8AxTZtk96S92knY6llaapCzGp00dEVnjqJE');

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;