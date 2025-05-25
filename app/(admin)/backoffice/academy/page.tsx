import { MainViewAcademyEditor } from "@/components/admin/academy/main-view";
import { AcademyCategory } from "@/lib/data/academy-type";

export const metadata = {
  title: "Backoffice Academy",
};

const categories = [
  { key: AcademyCategory.Intraday, label: "Intraday" },
  { key: AcademyCategory.Scalping, label: "Scalping" },
];

export default function AcademyPage() {
  return <MainViewAcademyEditor categories={categories} />;
}
