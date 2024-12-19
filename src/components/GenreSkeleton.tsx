import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={"20px"} margin={0.5} paddingY={"20.5px"}></Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
