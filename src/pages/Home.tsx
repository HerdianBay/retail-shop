import Companies from "../components/Home/Companies";
import Hero from "../components/Home/Hero";
import Subscribe from "../components/Home/Subscribe";
import Works from "../components/Home/Works";
import SolutionContainer from "../containers/SolutionContainer";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <SolutionContainer />
      <Works />
      <Companies />
      <Subscribe />
      <div className="divider px-4 mt-28 mb-0 md:px-6 xl:max-w-6xl xl:mx-auto"></div>
    </MainLayout>
  );
}
