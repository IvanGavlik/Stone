export interface MapOperation<SOURCE, DESTINATION> {

  map(source: SOURCE): DESTINATION;

}
