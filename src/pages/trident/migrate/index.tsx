import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { DebugObserver } from 'app/components/DebugObserver'
import Typography from 'app/components/Typography'
import { Feature } from 'app/enums'
import { AvailableToMigrate } from 'app/features/trident/migrate/AvailableToMigrate'
import NetworkGuard from 'app/guards/Network'
import TridentLayout, { TridentBody, TridentHeader } from 'app/layouts/Trident'
import Head from 'next/head'
import React from 'react'

const MigrateLiquidity = () => {
  const { i18n } = useLingui()

  return (
    <>
      <Head>
        <title>{i18n._(t`Migrate Liquidity | OwlSwap`)}</title>
      </Head>
      <DebugObserver />
      <TridentHeader pattern="bg-binary" className="!gap-2">
        <Typography variant="h2" className="text-high-emphesis" weight={700}>
          {i18n._(t`Migrate Liquidity`)}
        </Typography>
        <div className="max-w-2xl">
          <Typography className="text-high-emphesis" weight={700}>
            {i18n._(t`Select and migrate your liquidity positions from OwlSwap v1 to the Trident AMM`)}
          </Typography>
          <Typography variant="sm" className="mt-4" weight={400}>
            {i18n._(
              t`There are now multiple possible pools for the same pair, differentiated by fee tier and the use of TWAP oracles.`
            )}
          </Typography>
        </div>
      </TridentHeader>
      <TridentBody className="mb-14">
        <AvailableToMigrate />
      </TridentBody>
    </>
  )
}

MigrateLiquidity.Guard = NetworkGuard(Feature.TRIDENT)
MigrateLiquidity.Layout = TridentLayout

export default MigrateLiquidity
