import express from "express";
import dotenv from "dotenv";

import Stripe from "stripe"; // Import Stripe properly in ES module format
import { Order, Spoc, User } from "../models/index.js";
import mailSender from "../utils/MailSender.utils.js";

dotenv.config(); // Load environment variables

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Securely load secret key

const router = express.Router();

router.post("/create-payment-intent", async (req, res) => {
    try {
        const { amount, currency } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount, // Amount in cents
            currency: currency || "usd",
            payment_method_types: ["card"],
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post("/confirm-payment", async (req, res) => {
    try {
        const { orderId } = req.body;
        if (!orderId) {
            return res.status(400).json({ error: "Order ID is required" });
        }

        // Update order status to 'paid'
        const order = await Order.findByIdAndUpdate(
            orderId,
            { status: "paid" },
            { new: true }
        );

        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }

        // Find SPOC user to send email
        const spoc = await Spoc.findById(order.spocId);
        if (spoc) {
            const user = await User.findById(spoc.userId);
            if (user && user.email) {
                const emailTitle = "Payment Confirmed - Order Placed";
                const emailBody = `
                    <p>Dear ${spoc.name},</p>
                    <p>A payment has been successfully made for <strong>${order.requestedParali} tons of parali</strong> by the Power Plant.</p>
                    <p>Order ID: ${order._id}</p>
                    <p>Status: Paid</p>
                    <p>Please proceed with the dispatch.</p>
                    <p>Regards,<br> Grevion Team</p>
                `;
                await mailSender(user.email, emailTitle, emailBody);
            }
        }

        res.json({ success: true, order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router; // Use `export default` for ES modules
