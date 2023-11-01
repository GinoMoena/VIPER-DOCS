---
sidebar_position: 1
---


# GameScene

### Métodos

#### `int` CreateEntity (bool addTransform`=false`)

Crea una entidad y devuelve el id de la entidad. En esencia las entidades son simplemente un id, cualquier parámetro que se necesite agregar a la entidad se transforma en un componente.


#### `void` AddComponent(int entity, Component component)

Agrega el componente `component` a la entidad `entity`.

#### `Bag<int>` GetEntitiesWithComponent&lt;T&gt; where T : Component

Retorna una lista no ordenada de tipo `int` con las entidades que contienen un componente de tipo T. Es útil para sistemas que necesitan actualizar cierto tipo de componente y solo necesitan las entidades que utilicen ese componente.

#### `void` RemoveComponent&lt;T&gt;(int entity) where T : Component

Remueve el componente de tipo T en la entidad `entity`

#### `void` HasComponent&lt;T&gt;(int entity) where T : Component

Permite saber si la entidad `entity` tiene el componente `T`.

#### `void` HasSystem&lt;T&gt;() where T : GameSystem

Permite saber si el sistema tiene inicializado algún tipo de sistema. Por ahora no se ha utilizado pero podría ser útil si se necesita agregar o quitar sistemas dinamicamente.

#### `void` DeleteEntity(int entity) 

Permite eliminar la entidad `entity`

#### `T` GetComponent&lt;T&gt;(int entity) where T : Component

Permite acceder al componente de una entidad, es bastante útil y se utiliza frecuentemente en los sistemas para actualizar los componentes de entidades. Se puede facilitar el acceso utilizando EntityManager.GetComponent&lt;T&gt;(int entity) que es un atajo para este mismo método.

#### `void` AttachSystem(GameSystem system)
 
Permite agregar un sistem a la escena. Una vez se ha agregado un sistema este automáticamente funcionará.