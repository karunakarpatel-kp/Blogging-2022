import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const gplayModule = await import("google-play-scraper");
  const appDetails = await gplayModule.app({ appId: "com.google.android.apps.translate" });
  console.log(appDetails);
  return NextResponse.json(appDetails);
};
