import { AcademyProgressPage } from "@/components/students/academyProgressPage";
import { allCourses } from "@/components/students/academyProgressPage/data/all-courses";

const IntraDay = () => {
  return (
    <>
      {/* Show if User has Scalping, else show info Page */}
      <p>Dummy Page</p>
      <AcademyProgressPage course={allCourses.scalping} />
    </>
  );
};

export default IntraDay;
