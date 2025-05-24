import { MainViewAcademyEditor } from "@/components/admin/academy/main-view";
import { AcademyCategory } from "@/lib/data/academy-type";

const categories = [
  { key: AcademyCategory.Intraday, label: "Intraday" },
  { key: AcademyCategory.Scalping, label: "Scalping" },
];

export default function AcademyPage() {
  return <MainViewAcademyEditor categories={categories} />;
}