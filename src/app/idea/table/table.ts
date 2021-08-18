// @UI
export abstract class TableDto {
 /** @Coloumn(
    css:
  )*/
  id: string;
}

//TODO dammy UI for table
export interface Table {
  displayData(tableDto: TableDto[]);
}
