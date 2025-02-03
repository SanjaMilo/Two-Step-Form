import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex flex-row items-center justify-items-start min-h-screen p-8">
      <div className="flex min-h-[80vh] flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 bg-white">
        <IoIosCheckmarkCircleOutline size={80} className="text-blue-600" />
        <h2 className="my-5 text-xl font-bold tracking-tight text-gray-900">
          Congratulations
        </h2>
        <p>Welcome to your very own 25</p>
        <Link href="/" className="text-blue-600 pt-4 font-semibold">
          Back to start
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
