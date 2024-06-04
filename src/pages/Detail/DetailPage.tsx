import React from "react";
import { useParams } from "react-router-dom";

interface MatchParams {
  touristRouteId?: string;
}

export const DetailPage: React.FC = () => {
  const { touristRouteId } = useParams<Record<string, string>>();

  return (<h1>路游路线详情页面, 路线ID: {touristRouteId}</h1>);
};
