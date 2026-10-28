import { Metadata } from "next";
import { PrivacyClient } from "./privacy-client";

export const metadata: Metadata = {
  title: "Privacy Policy | Prime Lotto",
  description: "How Prime Lotto handles your data.",
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
