interface movieProps {
  params: { id: number };
}

export default function Movie({ params }: movieProps) {
  return <div>this is the page: {params.id}</div>;
}
