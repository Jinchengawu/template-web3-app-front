/*
 * @Author: dreamworks.cnn@gmail.com
 * @Date: 2025-07-21 14:33:25
 * @LastEditors: dreamworks.cnn@gmail.com
 * @LastEditTime: 2025-07-21 15:00:11
 * @FilePath: /template-web3-app-front/env.mjs
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    // Iron session requires a secret of at least 32 characters
    NEXTAUTH_SECRET: z
      .string()
      .min(32)
      .default("complex_password_at_least_32_characters_long"),
    DATABASE_URL: z.string().optional(),
    // Comma separated list of Ethereum addresses, accepts optinal whitespace after comma
    APP_ADMINS: z
      .string()
      .regex(/^(0x[a-fA-F0-9]{40}( *, *0x[a-fA-F0-9]{40})* *)*$/)
      .optional(),
    DISCO_API_KEY: z.string().optional(),
    OPENAI_API_KEY: z.string().optional(),
    ETHERSCAN_API_KEY: z.string().optional(),
    ETHERSCAN_API_KEY_OPTIMISM: z.string().optional(),
    ETHERSCAN_API_KEY_ARBITRUM: z.string().optional(),
    ETHERSCAN_API_KEY_POLYGON: z.string().optional(),
    MORALIS_API_KEY: z.string().optional(),
    GITCOIN_PASSPORT_SCORER_ID: z.string().optional(),
    GITCOIN_PASSPORT_API_KEY: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_USE_PUBLIC_PROVIDER: z.enum(["true", "false"]).default("true"),
    NEXT_PUBLIC_PROD_NETWORKS_DEV: z.enum(["true", "false"]).default("false"),
    NEXT_PUBLIC_ALCHEMY_API_KEY: z.string().optional(),
    NEXT_PUBLIC_INFURA_API_KEY: z.string().optional(),
    NEXT_PUBLIC_LIVEPEER_API_KEY: z.string().optional(),
    NEXT_PUBLIC_SITE_URL: z.string().optional(),
    NEXT_PUBLIC_WC_PROJECT_ID: z.string().min(1),
  },
  runtimeEnv: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    APP_ADMINS: process.env.APP_ADMINS,
    DISCO_API_KEY: process.env.DISCO_API_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    NEXT_PUBLIC_PROD_NETWORKS_DEV: process.env.NEXT_PUBLIC_PROD_NETWORKS_DEV,
    ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY,
    ETHERSCAN_API_KEY_OPTIMISM: process.env.ETHERSCAN_API_KEY_OPTIMISM,
    ETHERSCAN_API_KEY_ARBITRUM: process.env.ETHERSCAN_API_KEY_ARBITRUM,
    ETHERSCAN_API_KEY_POLYGON: process.env.ETHERSCAN_API_KEY_POLYGON,
    MORALIS_API_KEY: process.env.MORALIS_API_KEY,
    GITCOIN_PASSPORT_SCORER_ID: process.env.GITCOIN_PASSPORT_SCORER_ID,
    GITCOIN_PASSPORT_API_KEY: process.env.GITCOIN_PASSPORT_API_KEY,
    NEXT_PUBLIC_USE_PUBLIC_PROVIDER:
      process.env.NEXT_PUBLIC_USE_PUBLIC_PROVIDER,
    NEXT_PUBLIC_ALCHEMY_API_KEY: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    NEXT_PUBLIC_INFURA_API_KEY: process.env.NEXT_PUBLIC_INFURA_API_KEY,
    NEXT_PUBLIC_LIVEPEER_API_KEY: process.env.NEXT_PUBLIC_LIVEPEER_API_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_WC_PROJECT_ID: process.env.NEXT_PUBLIC_WC_PROJECT_ID,
  },
})
