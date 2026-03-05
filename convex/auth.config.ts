import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
     
      domain: "https://enabling-albacore-74.clerk.accounts.dev",
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;