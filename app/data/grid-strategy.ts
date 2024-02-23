import { IS_DEVNET, IS_STAGING, IS_TESTNET } from '@/app/utils/constants/setup'
import { SpotGridMarket, SpotGridMessages } from '@/types'

export const gridStrategyAuthorizationMessageTypes = [
  SpotGridMessages.MsgWithdraw,
  SpotGridMessages.MsgBatchUpdateOrders,
  SpotGridMessages.MsgCreateSpotMarketOrder
]

const mainnetSpotGridMarkets: SpotGridMarket[] = [
  {
    slug: 'inj-usdt',
    contractAddress: 'inj1x4kr29dlf9u4r7ya6mr2jvs0pc9sfhnlhlr9np'
  },
  {
    slug: 'atom-usdt',
    contractAddress: 'inj1c5jsz3dk2g6wywygchwrlwxl5gyz2yu7rnxxdr'
  },
  {
    slug: 'tia-usdt',
    contractAddress: 'inj1ljzjh8tzuvrj7mkhv9mxvv4cedn7kzauargrey'
  },
  {
    slug: 'stinj-inj',
    contractAddress: 'inj195l0hketpha2x2zahckfhlchlkrwckxd74030v'
  },
  {
    slug: 'weth-usdt',
    contractAddress: 'inj1vldp2685n8gwynpxfnmv6ucn5qumjsnqkkmhm5'
  },
  {
    slug: 'whale-usdt',
    contractAddress: 'inj1fuftrqrfmuh0xrg50jlgnq4ptarq5dd9f6k450'
  },
  {
    slug: 'usdtkv-usdt',
    contractAddress: 'inj1ej7je29ugdqg3ynrza2w30gf5r5rch37rhz53h'
  },
  {
    slug: 'wmatic-usdt',
    contractAddress: 'inj1zlufv9jjugee9ejm5grqdk4ja09e7vv6ewv0yx'
  },
  {
    slug: 'arb-usdt',
    contractAddress: 'inj18srw6ktk67sez2m2k20hgsftp8gj5xmzz8a6u7'
  },
  {
    slug: 'kuji-usdt',
    contractAddress: 'inj1zen7yh00gffkvsxcptqzaslu27msrw0ee933vf'
  },
  {
    slug: 'talis-usdt',
    contractAddress: 'inj144w02j59yh5jwf6ufe6pf3uasckw7cca833r6r'
  },
  {
    slug: 'sol-usdt',
    contractAddress: 'inj1a2xr74g9w78acf054jfwspzmgzy5flv5275642'
  },
  {
    slug: 'ninja-inj',
    contractAddress: 'inj1rtl5y03d57f67v4rf7nqdkv9h80fxgfq2s3n82'
  },
  {
    slug: 'kira-inj',
    contractAddress: 'inj1y7a08ctmvcu72rldqfy92z72k8qfrg5ka5cs9w'
  },
  {
    slug: 'autism-inj',
    contractAddress: 'inj1l2hs0azs27vet7aqa54l9tpv0xufmp4acrarlj'
  },
  {
    slug: 'usdy-usdt',
    contractAddress: 'inj1vxt88736ufgt227vh8r8z9gl2f3a5806efqjx7'
  },
  {
    slug: 'ginger-inj',
    contractAddress: 'inj19dj6qj942vya4qpmj4j9r4cnchpqje5crgdswx'
  },
  {
    slug: 'app-inj',
    contractAddress: 'inj1ysm53zecga60lup2mt59uz0wax8vqsyr7vj2fp'
  },
  {
    slug: 'strd-usdt',
    contractAddress: 'inj15wyz4ezl4kjkz07qs2asgmr8n2ffmvkcug52tf'
  },
  {
    slug: 'orai-usdt',
    contractAddress: 'inj1qv2hhz3jge4fvungk79wqjnscfctajgpy67s0j'
  },
  {
    slug: 'ninj-inj',
    contractAddress: 'inj1p66szjh4lf7c9n8wz52mpr8d9cwdc70xxm4mgk'
  },
  {
    slug: 'dojo-inj',
    contractAddress: 'inj1tyu3x9ejuhhavlfe9serz5qk4c7eyhd5f8xc7n'
  },
  {
    slug: 'andr-usdt',
    contractAddress: 'inj1w4w0dtu3zrp550ah0p28u3xsqlzzrry9q3d7yk'
  },
  {
    slug: 'hinj-inj',
    contractAddress: 'inj1dxvlc5snn5y02nn82xdhnvwj3y09t9pnh6msf5'
  }
]

if (IS_STAGING) {
  mainnetSpotGridMarkets.push(
    ...[
      {
        slug: 'pyth-usdt',
        contractAddress: 'inj1t8g6vuj3hyu6r9lrdmgttvzm9wqxztr0uhfgls'
      }
    ]
  )
}

const testnetSpotGridMarkets: SpotGridMarket[] = [
  // {
  //   slug: 'inj-usdt',
  //   contractAddress: 'inj1djlhetddzrztjn4v0s4vt0dca3y8hwshkh37zg'
  // },
  // {
  //   slug: 'atom-usdt',
  //   contractAddress: 'inj14yr8nj6tndmr4xyw9c66feqepv59revxsm7450'
  // },
  // {
  //   slug: 'atom-usdt',
  //   contractAddress: 'inj1qzc20al6khfy5ta3m4fk0atct5k98tnny0t7he'
  // },
  // {
  //   slug: 'tia-usdt',
  //   contractAddress: 'inj18sl3ysva0czdgc2eqmqlrhfeu2v4l8vx4245ql'
  // }
  {
    slug: 'inj-usdt',
    contractAddress: 'inj1fs4mr4qsqwwsh4tps860tcvx2kfunfkwv5p750'
  },
  {
    slug: 'atom-usdt',
    contractAddress: 'inj107fsasqmcqs4ztmvxdhrxsekzyjxcz7xwafjw5'
  },
  {
    slug: 'tia-usdt',
    contractAddress: 'inj1zvjssysvcqwpsyr6rqr658vy9qp9dp2halezd3'
  }

  // Add This Market Later
  // {
  //   slug: 'weth-usdt',
  //   contractAddress: 'inj1aehu642q3td95jlpprgcypmstmn3pknaq4rsjn'
  // }
]

const devnetSpotGridMarkets: SpotGridMarket[] = [
  {
    slug: 'inj-usdt',
    contractAddress: 'inj14hj2tavq8fpesdwxxcu44rty3hh90vhujaxlnz'
  }
]

export const spotGridMarkets: SpotGridMarket[] = IS_TESTNET
  ? testnetSpotGridMarkets
  : IS_DEVNET
  ? devnetSpotGridMarkets
  : mainnetSpotGridMarkets

export const MARKETS_WITH_LOW_TRADING_SIZE = ['dojo-inj', 'andr-usdt']
