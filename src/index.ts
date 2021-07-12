import {
  AssetCode,
  LayerVersion,
  LayerVersionProps,
  Runtime,
} from "@aws-cdk/aws-lambda";
import { Construct } from "@aws-cdk/core";

export class NodePrismaPostgresLayer extends LayerVersion {
  constructor(
    scope: Construct,
    id: string = "NodePrismaPostgresLayer",
    props?: Partial<LayerVersionProps>
  ) {
    super(scope, id, {
      ...props,
      code: new AssetCode(__dirname + "/nodejs.zip"),
      compatibleRuntimes: [Runtime.NODEJS_10_X, Runtime.NODEJS_12_X],
      license: "MIT",
      description: "Pg/prisma lambda layer for Nodejs",
    });
  }
}

export default NodePrismaPostgresLayer;
