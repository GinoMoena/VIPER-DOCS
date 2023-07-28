---
sidebar_position: 1
---

# FrameDataComponent

FrameDataComponent es un componente que gestiona una animación del tipo `FrameData`. Este tipo de datos se generan a partir de la aplicación FrameDataManager creada para manejar animaciones junto a sus hitboxes o cajas de colisiones de distintos tipos.

Dado que es el componente que gestiona estas animaciones este será el responsable de entregar información como la animación que está en proceso, el cuadro de animación activo, los hitbox activos en ese proceso y además permite suscribir acciones (o callbacks) para que al terminar una animación se ejecute un cuadro de código. Esto último es especialmente útil cuando tienes animaciones que se deben ejecutar una sola vez y luego se debe retornar al estado anterior como realizar un jab, un golpe aéreo, o cualquier animación que saque a la entidad de su estado de animación neutral.


### Atributos

#### currentAnimation `FrameData`

Entrega la animación actual en formato `FrameData`. Esto contiene la información completa de la animación, tanto frames, como hitboxes, etc.

#### currentFrame `int`

Indica el cuadro actual de animación, Es esencial para saber que tipo de hitbox está activa en ese cuadro y la animación que se reproduce en el mismo.

#### onEndAnimation `action`

Este atributo funciona como una acción, es decir que se puede agregar un método callback a este atributo y cuando se cumpla el ciclo de la animación esta acción ejecutará todos los métodos suscritos a ella.

### Métodos

#### Update (GameTime time) `void`

Método update que se actualiza cuadro a cuadro, si hay una animación activa irá realizando el flujo de la animación cuadro por cuadro.

#### getLayer(int index) `Layer`

Retorna la capa que se haya indicado por index, esto debe ser de conocimiento previo para el usuario. Las capas contienen el tipo de hitbox. Por ejemplo si necesito calcular si un golpe le ha dado a la entidad, puedo obtener la capa de "Hurtbox" y comprobar si los hitbox del oponente solapan con algún hitbox de este hurtbox en el cuadro actual, para eso puedo obtener estas capa y luego utilizando `currentFrame` podré obtener los cuadros de hurtbox que existen en el cuadro actual.

#### getHitboxes() `List<Hitbox>`

Retorna  las hitboxes del cuadro que está desplegandose en pantalla en ese momento. Este método es útil para obtener directamente todo lo que se ejecuta en el momento y realizar un cruce de hitboxes entre entidades.

#### getCurrentSprite() `Texture2D`

retorna el sprite actual según el valor de `currentFrame`.

#### getCurrentPointer() `int`

retorna el frame actual. Este tipo de animaciones cuadro a cuadro funciona con keyFrames, esto quiere decir que hay cuadros de animación que duran más que otros, esto significa que la animación en sí, si es de 4 frames por ejemplo, no significa que a nivel de código en 4 ciclos se complete la animación, cada frame tiene un campo duración y ese es el determinante de cuanto durará cada frame a nivel de código. En base a esta definición, este método retornará el frame de la animación que está siendo mostrada (o sea el puntero de la animación de frameData) en base a cuantos cuadros han pasado en la aplicación desde que inició la animación actual.

#### getAnimationDuration() `int`

Retorna la duración real en frames de la animación, esto significa sumar la duración de cada frame individual de frameData (no confundir con la cantidad de frames de FrameData). 

#### Draw(SpriteBatch _sb) `void`

Método que dibuja el cuadro de animación actual, se debe ejecutar en el método Draw de la entidad que lo consuma. Esto facilita al programador para evitar tener que realizar los trabajos de dibujo manualmente, por lo que se recomienda su uso.

#### DrawDebug(SpriteBatch _sb, Texture2D t) `void`

Método bastante útil si se necesita dibujar los hitbox en pantalla, en caso de necesitar realizar depuración o tener una visualización de los hitbox se puede utilizar este método.
