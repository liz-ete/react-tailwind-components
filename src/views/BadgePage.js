import React from "react";
import Badge from "../components/Badge/Badge";

function BadgePage() {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <div className="flex gap-4 items-center">
        <Badge small>Label</Badge>
        <Badge>Label</Badge>
        <Badge large>Label</Badge>
      </div>
      <div className="flex gap-4 items-center">
        <Badge small error>
          Label
        </Badge>
        <Badge error>Label</Badge>
        <Badge large error>
          Label
        </Badge>
      </div>
      <div className="flex gap-4 items-center">
        <Badge small warning>
          Label
        </Badge>
        <Badge warning>Label</Badge>
        <Badge large warning>
          Label
        </Badge>
      </div>
      <div className="flex gap-4 items-center">
        <Badge small success>
          Label
        </Badge>
        <Badge success>Label</Badge>
        <Badge large success>
          Label
        </Badge>
      </div>
      <div className="flex gap-4 items-center">
        <Badge small brand>
          Label
        </Badge>
        <Badge brand>Label</Badge>
        <Badge large brand>
          Label
        </Badge>
      </div>
    </div>
  );
}

export default BadgePage;
