# Input

Este clase almacena todos los registros de inputs registrados desde el teclado y mouse. Si bien Monogame ya incluye una clase Input esta versión agrega métodos útiles para el flujo del juego, estos métodos se describen a continuación.

### GetKeyDown(Keys key)

Retorna `true` si la tecla indicada fue presionada en el frame actual.

### GetKeyUp(Keys key)
Retorna `true` si la tecla indicada fue levantada en el frame actual.

### GetKey(Keys key)

Al igual que el método clásico verifica si la tecla actual está siendo presionada.

### LeftClick
Retorna `true` si el click izquierdo fue presionado durante ese frame.

### RightClick
Retorna `true` si el click derecho fue presionado durante ese frame.

### MousePosition

Retorna un objeto de tipo `Vector2` con las coordenadas x e y del mouse.


## GameInput `class`

esta clase funciona como una máscara para las acciones del juego, contiene los siguientes botones:

- Left
- Right
- Up
- Down
- A
- B
- Start
- Select

Esto permite que en lugar de asociar una acción a una tecla específica se puede mapear a uno de estos botones y al iniciar el juego se realizará la acción haciendo referencia a los botones del GameInput.

Los valores de las teclas asociadas a estos gameInputs son indicados en un archivo dentro de la carpeta Content en la ruta `Content/Text/input.properties` Si se modifican estos valores esas asignaciones funcionarán como las teclas indicadas anteriormente.

## GamepadVirtual `class`

Se creo esta clase para almacenar un gamepad virtual, este gamepadvirtual tiene una serie de botones definidos en un enum llamado `GamepadButtons`. La ventaja de esta clase es que al generar este controlador virtual se pueden generar definiciones de los botones que utiliza, de este modo se puede agregar una definición de teclado donde se mapean teclas por ejemplo ASDW como GamepadButton.LEFT/DOWN/RIGHT/UP, esto trae como ventaja el remapeo de un gamepad sin necesidad de tocar el código fuente donde se utiliza. Inicialmente se pueden mapear los botones en `Content/Text/gamepad.properties`.

Además cuenta con un buffer de entrada que permite revisar los inputs realizados en los últimos frames, esto es útil para probar secuencias de algún comando como hacer un hadouken por ejemplo. Esta funcionalidad está disponible a través del método `TestSequence(Queue<GamepadButton> list, bool cancelOnNeutral=false)`.

Por defecto la clase Input genera un mando virtual para el player 0. Este se puede usar directamente, pero también se pueden agregar más players si es necesario. Siempre se debe acceder a la información de los gamepadvirtuales a través del singleton Input ya que este se encarga de refrescar la información correspondiente a estos botones.

Se espera en el futuro actualizar este componente para usar un json en el almacenamiento de configuraciones y completar el soporte de un mando real como xbox, ps5, etc.
