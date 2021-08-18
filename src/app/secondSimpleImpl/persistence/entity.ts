
// endpoint ?
// header options
export abstract class Entity {
  // this all must be in decorator
  id: string;
  contentType: string;
  endpoint: string;
  createPermission?: string;
  readPermission?: string;
  updatePermission?: string;
  deletePermission?: string;
}
