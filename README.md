This is minimal [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) to expose a potential bug.

## Expected behavior

Run the Next.js development server:

```shell
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open <http://localhost:3000> with your browser to see the result.

Note that these pages work:

* [`/`](http://localhost:3000/) – English translation (default)
* [`/sv/`](http://localhost:3000/sv/) – Swedish translation
* [`/next.svg`](http://localhost:3000/next.svg) – file from the public directory used on the pages above
* [`/robots.txt`](http://localhost:3000/robots.txt) – another file from the public directory

## Actual behavior

Build the app using next-on-pages:

```shell
npx @cloudflare/next-on-pages
```

Run it like on Cloudflare Pages:

```shell
npx wrangler pages dev .vercel/output/static --compatibility-flag=nodejs_compat --port=3001
```

Note that these pages work:

* [`/`](http://localhost:3001/) – English translation (default)
* [`/sv/`](http://localhost:3001/sv/) – Swedish translation 

But these assets from the public folder do not:

* [`/next.svg`](http://localhost:3001/next.svg) – file from the public directory used on the pages above
* [`/robots.txt`](http://localhost:3001/robots.txt) – another file from the public directory

The assets are, however, available on `/sv/robots.txt` and `/sv/next.svg`…