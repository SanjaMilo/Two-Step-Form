import MultiForm from "@/components/MultiForm";
import Header from "../components/Header";
import SearchCountry from "@/components/SearchCountry";

export default function Home() {
  return (
    <div className="relative flex flex-row items-center justify-items-start min-h-screen p-8">
      <div className="flex min-h-[80vh] flex-1 flex-col justify-start px-6 py-12 lg:px-8 bg-white">
        <Header />
        <MultiForm />
      </div>
    </div>
  );
}
