import AboutContainer from "../containers/AboutContainer";
import MainLayout from "../layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <AboutContainer />
      <div className="divider px-4 mt-28 mb-0 md:px-6 xl:max-w-6xl xl:mx-auto"></div>
    </MainLayout>
  );
}
