import MainAcademy from "@/components/academy";
import { AcademyCategory } from "@/lib/data/academy-type";
import { mockSections } from "@/lib/data/mock-data-academy";

export const metadata = {
  title: "Intraday Academy",
};

const IntraDayAcademy = () => {
  const intraDaySection = mockSections.filter((section) => section.category === AcademyCategory.Intraday);

  return (
    <>
      {/* <pre className="text-xs p-2 rounded">{JSON.stringify(intraDaySection, null, 2)}</pre> */}

      <MainAcademy data={intraDaySection} />
    </>
  );
};

export default IntraDayAcademy;
