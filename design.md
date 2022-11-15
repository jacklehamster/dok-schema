Dok Engine 2

________


## Entities <= Auxiliaries

Workflow:

Select Entity
Attach auxiliaries
Define auxiliary fields
Implement auxiliaries


## Auxiliary dependencies.

=> Some auxiliary forces other auxiliaries to be attached. (Add validation warning in editor)

Auxiliaries have fields/properties. Entities don't.

Auxiliary dependencies can enforce some properties on Auxiliary.

If an Auxiliary's dependencies has all properties pre-enforced, it is implied and can just be ommited.


## Asset reference

Obj <=> link <=> asset

Link is doubly linked to both obj and assets.
When obj ref changes, link gets updated
When asset changes, link gets updated
Upon save to file, links get removed, the obj reference becomes direct.

?Translatable strings as assets?

## Auxiliary rules

### Obj

Entities w auxiliaries
Entities have no props, only auxiliaries
Auxiliaries can have required and optional props
Auxiliaries can reference other auxiliaries on the same entity.
Auxiliaries can require other auxiliaries on the same entity.
Auxiliary props can contain entities 
Auxiliaries can require entities in props to have certain auxiliaries.
Some auxiliaries can access (with required or optional access) the parent containing the entity that the auxiliary is attached to.
Auxiliaries can define an execution dependency, which will affect the order in which auxiliaries get executed on an entity.
Some conflicting auxiliaries can prevent each other's presence.


### Validation

Entités only contain auxiliaries
All required properties on auxiliaries must be present.
All properties on auxiliaries must match the type 
All auxiliaries that an auxiliary depends on must be present on the same entity.
All entities inside an auxiliary's properties must have the auxiliaries that the property requires.
Auxiliary with parent restrictions must be on an entity contained in an entity with auxiliaries that satisfy those restrictions 
Parent restrictions can turn into "ancestor" restrictions.
No conflicting auxiliaries can be present on the same entity.
All auxiliaries must have an implementation or be explicit marked as no- implementation.
No circular dependency on auxiliary execution order.

### Implementation 

Each auxiliary's implementation has direct access to the other auxiliaries on the same entity, and the parent if they have that restriction.
Auxiliaries have access to all exposed methods and properties of those auxiliaries.

### Program lifecycle

Parse and produce object tree.
Execute each auxiliaries init code in parallel. If there are dependencies, execute those in proper order.
Recursively execute all init methods in children entities' auxiliaries.
Execute recursively all post-create methods.
Enter root entity.
Execute all auxiliaries on that root entity.
Note: a children could add a listener on an ancestor, and that's how children code get executed.
The code can command a change of entity. Once the code has completed, we move to that new entity.
If there are conflicting requests of changing entity, there should be a resolver auxiliary that decides where to go. If not, the new entity is randomly picked.

Note: Moving to a new entity is a way to change apps, or scenes within an app. Most of the time, the execution will remain on one entity.

### Changing Auxiliary structure

It is possible to change the program structure by adding / removing auxiliaries on the fly. Auxiliaries that perform those operations must be explitely authorized to do so (see auxiliary permissions in doc). Separately, an auxiliary can save the program back to it's source if it has permission to do so.

Multiple entities
Entities can be attributed to multiple instances. (That's defined by the Multiple auxiliary). It can be limited or limitless.
As an example, an entity can represent multiple NPCs in a game 
Those are not part of the auxiliary construct, since it's more of an implementation detail.

### Auxiliary permissions

Auxiliaries can do pretty much whatever they want, but to be secure, each will have explicit permissions defined. Such permissions can be: access files, access IO, display, modify program structure, view program structure, ….

### Inheritance

Auxiliaries can inherit from other auxiliaries. They can also have interfaces.
Non-conflicting inheritance is allowed.

Entities don't have inheritance. (Actually, they don't even have a type). Entities are only defined by the auxiliaries they hold.


### Program definition

A programs is a giant serializable object with links to assets.
Using Json reference, a program can be split into multiple files.

### Auxiliary flavors and templates

Auxiliaries could have different properties depending on environment, device type, realm, ect…

To handle that, we can have special auxiliaries that would contain entities that flip between various auxiliary configurations.

SwitcherAuxiliary {
    Entity - Aux
    Entity - Aux
    Entity - Aux
}

The Switcher auxiliary must extend the inner auxiliary, so that it can "pretend" to be of that type.

So an auxiliary can use templating to change the type it's extending.

SwitcherAuxiliary extends <T> {
     Entity - Aux<T>
     Entity - Aux<T>
     …
}

### Auxiliary patterns for gaming

#### The Refresher

Refreshers run continuously frame by frame.
Some can run periodically.
For games, frame by frame refreshers calculate a situation and each frame and update data before displaying on screen.
The Refresher can have an optional refresh manager in it's context. After changing context, we shut down all refreshers 
Without context, the Refresher needs to know to stop on its own.
Refreshers can activate/deactivate on their own given conditions or events
Other auxiliaries can also stop refreshers.

#### The input listener

Input listeners will activate/deactivate based on context, like the Refresher.
Input listeners can be used to detect mouse input, keyboard input, gamepad ..
Generally a separate auxiliary hooks up with those listeners to consolidate actions (ex: gamepad + keyboard mapping) (menus with buttons that can be selected with keyboard or clicked by mouse)

#### Reference and obj replacement.

This auxiliary operates when we first build the an object.
This loads a file using a relative or absolute path into the target property.
References can be Json objects, or single values like string. They can also be asset links.

A reference auxiliary can also point to an object in the same file where it's defined. 

An additional auxiliary can be used in conjunction with reference auxiliary, which will replace string instances with the passed value.

#### Containers

Those auxiliaries are just containers for entities. At the root entity, we have a workspace auxiliary, which contains apps, and each contains Scenes.

It's best to structure those containers using folders. For that, we can have auto-generated index files in folder that list other files. Those files are reused by Reference auxiliary.

### Descendance registration 

Several children entities' can register themselves on an ancestor auxiliary. Ex: The Refresher auxiliary registers on the Refresher manager, because they need to shut down when we change comtext.

On postCreate, the registration happens. Then code in the ancestor can process children entities and handle its auxiliaries.

### Object pool

Object instances are represented by entities. For multiple instances, we still use a single entity with multiples.

When an object is needed, it is generated or retrieved from the pool.

### Permission and dependencies: A one time deal 

Rather than request for permissions one at a time when needed, the processed entity checks underlying objects if it has the required permissions / dependencies. The entity cannot execute if those are missing, unless it has an implemented fallback.


