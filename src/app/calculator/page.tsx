import { getPageContent } from "@/lib/supabase";
import CalculatorClient from "./CalculatorClient";

export const runtime = "edge";

export const metadata = {
  title: "Fitness Calculators",
  description: "Calculate your body mass index, basal metabolic rate, macro targets, and training zones.",
};

export default async function CalculatorPage() {
  const content = await getPageContent("calculator");
  return <CalculatorClient content={content} />;
}
