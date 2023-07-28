---
sidebar_position: 1
---


# Scene

### Atributos

#### entityList `List<Entity>`
Almacena la lista de entidades que pertenecen a la escena actual. Si se quiere registrar una entidad se debe utilizar `AddEntity(entity)`. Utilizar esta lista sólo para leer datos, no para insertar entidades nuevas.

### Métodos

Dado que Scene es una clase abstracta se debe utilizar herencia. Los métodos marcados como `virtual` deben ser implementados.

#### AddEntity (Entity ent)

A través de este método se deberán registrar nuevas entidades en la escena. En caso de no registrar la entidad, esta no será capaz de ejecutar sus métodos update y de dibujarla en pantalla.

#### Update (GameTime gametime) `virtual` 

Este método se ejecuta cada ciclo de juego (60fps). Es importante que en la implementación se haga la ejecución de la base para que se puedan actualizar también las entidades.

#### Draw (SpriteBatch sb, Texture2D t) `virtual` 

Este método dibuja en pantalla durante cada ciclo de juego. Al igual que en update, este método debe ejecutar su método base para que se pueda actualizar el dibujo en entidades.

#### DrawHD (SpriteBatch sb, Texture2D t) `virtual` 

Este método dibuja sprites si el modo HD está en estado `true`.

#### DrawDebug (SpriteBatch sb, Texture2D t) `virtual` 

Este método dibuja sprites si el modo debug está en estado `true`.
