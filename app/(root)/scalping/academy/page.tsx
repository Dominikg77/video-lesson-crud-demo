import MainAcademy from "@/components/students/academy/index";
import { AcademyCategory } from "@/lib/data/academy-type";

export const metadata = {
  title: "Scalping Academy",
};

const IntraDayAcademy = () => {
  return (
    <>
      <MainAcademy category={AcademyCategory.Scalping} />
    </>
  );
};

export default IntraDayAcademy;
