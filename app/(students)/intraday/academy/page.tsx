/* Einstiegs File für die Intraday Academy-Seite */


import MainAcademy from "@/components/students/academy/index";
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
