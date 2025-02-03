"use client";

import { LiaTimesSolid } from "react-icons/lia";

const TermsAndConditionsPolicy = () => {
  return (
    <div className="flex flex-row items-center justify-items-start min-h-screen p-8">
      <div className="relative flex min-h-[80vh] flex-1 flex-col justify-start px-6 py-12 lg:px-8 bg-white">
        <div className="absolute top-5 right-5">
          <LiaTimesSolid
            size={25}
            onClick={() => {
              history.back();
            }}
          />
        </div>
        <div>
          <h2 className="my-5 text-xl font-bold tracking-tight text-gray-900">
            Terms and Conditions
          </h2>
          <p className="mt-5 text-start text-sm/6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
            aliquam autem et dolor quidem quas odio? Repudiandae veritatis
            consectetur eos iusto libero praesentium itaque, ut nihil, enim
            obcaecati similique tempore?
          </p>
          <br />
          <p className="mt-5 text-start text-sm/6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            debitis et perferendis. Doloremque beatae odio inventore ab
            repudiandae! Laboriosam repellat, voluptates natus beatae nemo
            sapiente eligendi obcaecati ab quasi totam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPolicy;
