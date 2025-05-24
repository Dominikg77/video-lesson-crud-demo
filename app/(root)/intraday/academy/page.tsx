import MainAcademy from "@/components/academy";
import { AcademyCategory } from "@/lib/data/academy-type";

export const metadata = {
  title: "Intraday Academy",
};

const IntraDayAcademy = () => {
  return (
    <>
      <MainAcademy category={AcademyCategory.Intraday} />
    </>
  );
};

export default IntraDayAcademy;
