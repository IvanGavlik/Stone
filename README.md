# Stone

How to create angular app where UI will be decoupled form crud operations and business logic.

## Solution

### Idea

Have two or more abstractions. At least one for UI and other for curd operation and then use bridge pattern to bring them 
together. 

Bridge pattern more info [here](https://refactoring.guru/design-patterns/bridge)

### Implementation

UI abstraction provides dummy UI components.
Dummy UI component = there is no business logic or state only input and @Output events. 
It represents  data table, form, card...
Each component has DTO interface that is used as input.


Crud abstraction is service that provide basic functions of persistent storage (create, read, update and delete) and search.
As output has Entity interface.

Map abstraction is service that is used to map Entity interface to DTO interface and vice versa.

Bridge will be implemented as angular component that use Crud and Map abstraction for work with data, 
and UI abstraction for displaying data.
Also this component will have its service through which client can action on component events.

Consider that Entity interface or Crud Service has decorator for configuration.
Consider that UI DTO interface as decorator for configuration (on fields (generate element)  and classes).


### Example

UI abstraction

* src/app/firstSimpleImpl/ui/card/card.component.ts 
* src/app/firstSimpleImpl/ui/card/card.component.html
* it has DTO interface as input 
* does not do any operations it just @Outputs events

Curd abstraction

* src/app/firstSimpleImpl/fetch/fetch.service.ts
* returns entity interface

Map abstraction

* src/app/firstSimpleImpl/map/map-operation.service.ts
* maps entity to DTO interface

Bridge component

* src/app/firstSimpleImpl/app-card/app-card.component.ts
* glues together UI, Crud and Map 
* has service that notify on events form UI dummy component also can be used to notify on other things

Client 
* src/app/app.component.ts
* src/app/app.component.html
* use only Bridge component
* use Bridge component service to handle events from Bridge component
* for custom behavior he can override UI, Crud or Map abstraction 


## TODO
* finish Curd abstraction so that client to used it need only on his object extend/implement Entity abstract class/interface

    Example:
      `
        class User extends Entity {}
      `

* finish Map abstraction so that client to used it need only on his service extend/implement Map
  Also is this good approach ? can we automate this ? can we use some lib ?
   
    Example:
      `
        class UserMapper extends Map<User, TableUI> {}
      `

* create at least one UI dummy component (table) and Bridge component that will be for client to use.  
    Make examples and see is this good approach

* use Bridge component service to handle events from Bridge component Do we need abstraction for events ?

* what about security, permissions, translation and other ...
