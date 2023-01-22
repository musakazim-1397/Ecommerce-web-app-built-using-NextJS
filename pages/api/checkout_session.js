const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: req.body.items.map((item) => {
            const transformedItem = {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: item.name,
                  },
                  unit_amount: item.price * 100,
                },
                quantity: item.quantity,
              };
          return transformedItem;
        }),
        mode: "payment",
        submit_type: "pay",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        success_url: `${req.headers.origin}/successfulPayment/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
    //   res.redirect(303, session.url);
    res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
