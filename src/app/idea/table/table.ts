export abstract class TableDto {
  id: string;
}
//TODO dammy UI for table
export interface Table {
  displayData(tableDto: TableDto[]);
}
