import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/backlog/$items/item")({
  component: ItemComponent,
});

function ItemComponent() {
  const { items } = Route.useParams();

  return (
    <div>
      <h1>Item Details</h1>
      <p>Item ID: {items}</p>
    </div>
  );
}
