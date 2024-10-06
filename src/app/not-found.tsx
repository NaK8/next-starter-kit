import { Card, CardBody } from "@nextui-org/react";
import { IconFileUnknown } from "@tabler/icons-react";

const NotFound = () => {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody>
        <div className="flex items-center justify-center gap-2">
          <IconFileUnknown />
          <p className="text-2xl">This page can not be found</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default NotFound;
