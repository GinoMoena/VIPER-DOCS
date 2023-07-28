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
