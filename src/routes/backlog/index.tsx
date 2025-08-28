// this is a backlog for ideas i have i want to do in the future etc
// i want to make this to use the /backlog route

import React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/backlog/")({
  component: backlogHomepage,
});

function backlogHomepage() {
  return <div>backlogHomepage</div>;
}
