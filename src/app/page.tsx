import { Card, CardBody } from "@nextui-org/react";

export default async function Home() {
  //starts 2:10
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-center">
        <h1 className="mb-4 text-5xl">Next.js Starter</h1>
        <p>A simple starter for next.js</p>
      </CardBody>
    </Card>
  );
}
