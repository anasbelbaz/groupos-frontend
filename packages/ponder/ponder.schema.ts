import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  Erc20Owner: p.createTable({
    id: p.string(),
    chainId: p.int(),
    contractAddress: p.bytes(),
    ownerAddress: p.bytes(),
    balance: p.bigint(),
  }),
  Erc721Token: p.createTable({
    id: p.string(),
    chainId: p.int(),
    contractAddress: p.bytes(),
    tokenId: p.bigint(),
    ownerAddress: p.bytes(),
    mintedAt: p.bigint(),
    tbaAddress: p.bytes().optional(),
  }),
  Erc1155Owner: p.createTable({
    id: p.string(),
    chainId: p.int(),
    contractAddress: p.bytes(),
    tokenId: p.bigint(),
    ownerAddress: p.bytes(),
    balance: p.bigint(),
  }),
}));
