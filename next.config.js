/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    STRIPE_SECRET_KEY:
      "sk_test_51LnFFJJ4mcgeWakaAjoJiWfYUqC8k2jpGav6ZDW78kAswjXoRoojg4KKmVPSwtZEpCO0md8HiO5TybLzTyLQNNLR00lY9RjUwg",
    STRIPE_PUBLIC_KEY:
    "pk_test_51LnFFJJ4mcgeWaka9ypSeTdANX1iJKfBJ9kCHSihPsvg23gzP6uad04xkGiTcd0iMbhcpOok9e3PnAMUMteAZYBW008H1ZJrmF"
  },
};

module.exports = nextConfig;
