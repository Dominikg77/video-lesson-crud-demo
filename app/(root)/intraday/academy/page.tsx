import MainAcademy from "@/components/academy";
import { AcademyCategory, mockSections } from "./mock-data-intraday";

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
