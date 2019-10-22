import React from 'react'
import { BigNumber } from 'ethers/utils'

import { SectionTitle } from '../common/section_title'
import { ClosedMarketDetail } from './profile/closed_market_detail'
import { Status, BalanceItem, WinnerOutcome, Token } from '../../util/types'
import { View } from './profile/view'
import { formatDate } from '../../util/tools'

interface Props {
  balance: BalanceItem[]
  funding: BigNumber
  question: string
  resolution: Maybe<Date>
  status: Status
  marketMakerAddress: string
  winnerOutcome: Maybe<WinnerOutcome>
  collateral: Token
}

const MarketView = (props: Props) => {
  const { question, resolution, winnerOutcome } = props

  const renderView = () => {
    return winnerOutcome ? <ClosedMarketDetail {...props} /> : <View {...props} />
  }

  return (
    <>
      <SectionTitle title={question} subTitle={resolution ? formatDate(resolution) : ''} />
      {renderView()}
    </>
  )
}

export { MarketView }
