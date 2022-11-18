Dok engine 3

---

- Entities: instances or collection of instances in an app / game.
    - Defined as Json object.
    - Only one type.
    - Only contains auxiliaries.
- Auxiliary: accessory for entities that adds abilities to them.
    - Defined as Json object.
    - Multiple types.
    - Can be objects or simple types.
    - Inheritance possible.
    - Auxiliaries can reference each other.
    - Can hold extra data at runtime.
    - Can be removed / added at runtime.
- Processor: code running for processing auxiliaries on entities.
    - Defined as code.
    - Associated with one auxiliary.
    - One auxiliary can have multiple processors that dynamically swap.
