"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";


export default function SyncUser() {
  const { user } = useUser();
  const syncUser = useMutation(api.users.syncUser);

  useEffect(() => {
    if (!user) return;

    syncUser({
      userId: user.id,
      email: user.emailAddresses[0].emailAddress,
      name: user.fullName || "User",
    });
  }, [user]);

  return null;
}
