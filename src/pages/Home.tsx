import Companies from "../components/Home/Companies";
import Hero from "../components/Home/Hero";
import Solution from "../components/Home/Solution";
import Subscribe from "../components/Home/Subscribe";
import Works from "../components/Home/Works";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Solution />
      <Works />
      <Companies />
      <Subscribe />
      <div className="divider px-4 mt-28 mb-0"></div>
    </MainLayout>
  );
}
