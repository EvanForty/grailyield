// GrailYield settings. Edit this file, commit, and Vercel redeploys automatically.
window.GY_CONFIG = {
  // 1. A Solana RPC with the DAS API. Free key: https://dashboard.helius.dev
  //    Card pictures show without it. It's needed for on-chain pNFT photos,
  //    the "Your cards" tab and SOL balances.
  RPC_URL: "", // e.g. "https://mainnet.helius-rpc.com/?api-key=YOUR_KEY"

  // 2. Wallet address(es) holding the listed pNFTs (your rental program's vault,
  //    or your own wallet for now). Each pNFT is matched to its listing by name,
  //    and the listing shows the image from that NFT's metadata.
  VAULT_ADDRESSES: [
    // "YourVaultOrWalletAddress",
  ],

  // 3. Optional: Collector Crypt collection address, to ignore unrelated NFTs.
  CC_COLLECTION: "",

  // Optional: pin specific listings to a mint, e.g. "base:4": "Mint111..."
  MINTS: {},

  CARDS_PER_USDC: 8
};
