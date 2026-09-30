# Paradise Nursery

Paradise Nursery is a responsive React and Redux Toolkit shopping application for browsing houseplants, adding products to a cart, changing quantities, removing items, and viewing the total cost.

## Assessment features

- Landing page with company information, a background image, and Get Started navigation
- Product page with 18 plants, six plants in each of three categories
- Shared navbar with Home, Plants, Cart, and a dynamic cart quantity
- Redux Toolkit cart state
- Disabled Add to Cart button after a plant is added
- Shopping cart with item images, unit prices, quantities, item totals, cart total, increase, decrease, and delete actions
- Continue Shopping and Checkout buttons
- Responsive layout

## Run locally

```bash
npm install
npm run dev
```

## Production check

```bash
npm run build
npm run preview
```

## Deploy with GitHub Pages

1. Create a public GitHub repository, for example `paradise-nursery`.
2. Push this project to the `main` branch.
3. Open repository **Settings > Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. The included `.github/workflows/deploy.yml` builds and deploys the app after each push to `main`.

This project uses `HashRouter` and Vite `base: "./"`, so page refreshes work when deployed under a GitHub Pages repository path.

## Main assessment files

- `src/components/AboutUs.jsx`
- `src/App.css`
- `src/App.jsx`
- `src/CartSlice.jsx`
- `src/components/ProductList.jsx`
- `src/components/CartItem.jsx`
