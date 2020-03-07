import React from "react";
import { Skeleton } from "@material-ui/lab";

const CustomSkeleton = () => {
  return (
    <div className="col-3 p-1">
      <Skeleton variant="rect" animation="wave" width={"100%"} height={260} />
      <Skeleton variant="text" animation="wave" />
    </div>
  );
};

export default CustomSkeleton;
