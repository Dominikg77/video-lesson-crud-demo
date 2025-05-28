import { AcademyProgressPage } from "@/components/students/academyProgressPage";
import { allCourses } from "@/components/students/academyProgressPage/data/all-courses";

const IntraDay = () => {
  return (
    <>
      {/* Show if User has Intraday, else show info Page */}
      <p>Dummy Page</p>
      <AcademyProgressPage course={allCourses.intraday} />
    </>
  );
};

export default IntraDay;
