# GrailYield

Grail rental for locked Collector Crypt pNFTs on Solana. Static site, no build step.

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. In Vercel: Add New -> Project, import the repo, framework preset **Other**.
3. Leave build command and output directory empty, then Deploy.

## Card images
Every listing shows its official card image out of the box (from the Pokémon TCG API image CDN,
`images.pokemontcg.io`). To show the actual photos of the vaulted pNFTs instead, edit `config.js`:
1. `RPC_URL`: a DAS-enabled RPC (free Helius key works).
2. `VAULT_ADDRESSES`: the wallet(s) that hold the listed pNFTs. Each one is matched to its listing by
   card name and set (Base, Jungle, Fossil, Rocket) and shows the image from the NFT's metadata.
3. Optional `CC_COLLECTION` to filter to Collector Crypt's collection.

Connected wallets also get a "Your cards" tab with images from their own pNFTs.

RPC keys in front-end code are public. Restrict your Helius key to your Vercel domain in the Helius dashboard.

## Wallets
Phantom, Solflare, Backpack and any Wallet Standard wallet. Renting and listing currently sign the
terms as a message; wire these to your rental program's transactions for production.
