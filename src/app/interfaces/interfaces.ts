export interface Nfts {
    id: string,
    contract_address: string | null,
    name: string,
    asset_platform_id: string,
    symbol: string
}

export interface NftDetail {
    id: string;
    contract_address: string;
    asset_platform_id: string;
    name: string;
    symbol: string;
    image: {
      small: string;
    };
    description: string;
}
  