import { Metadata } from "next";
import { TermsClient } from "./terms-client";

export const metadata: Metadata = {
  title: "Terms and Conditions | Prime Lotto",
  description:
    "Official Terms and Conditions for PrimeLotto games across USSD (*20205#), SMS (20205), SAT Push, and the Web Platform.",
};

export default function TermsPage() {
  return <TermsClient />;
}
