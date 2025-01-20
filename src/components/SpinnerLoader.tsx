"use client";

import { ThreeDots } from "react-loader-spinner";

const SpinnerLoading = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#701a75"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default SpinnerLoading;
