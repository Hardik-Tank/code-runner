import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/* Save user in DB */
export const syncUser = mutation({
  args: {
    userId: v.string(),
    email: v.string(),
    name: v.string(),
  },

  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_user_id", (q) =>
        q.eq("userId", args.userId)
      )
      .first();

    if (existing) return;

    await ctx.db.insert("users", {
      userId: args.userId,
      email: args.email,
      name: args.name,
      isPro: false,
    });
  },
});

/* Get user from DB */
export const getUser = query({
  args: {
    userId: v.string(),
  },

  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_user_id", (q) =>
        q.eq("userId", args.userId)
      )
      .first();
  },
});
