# Game Manager (Singleton)

## Atributos

### Modificables

#### const INTERNAL_RES INTERNAL_RESOLUTION
Indica la resolución virtual. La idea de este motor es poder realizar cálculos en una resolución virtual más baja y luego mostrar gráficos en alta resolución. Por ejemplo trabajar con tiles de 16x16 en una resolución interna de 640x360 y escalar a 48x48 con resolución 1920x1080 (x3).

#### const RES RESOLUTION

Indica la resolución de la pantalla. La resolución real que será visualizada por el usuario.

#### const bool HD_MODE

Indica si la visualización está en modo HD o en modo no escalada. Esto permite agilizar el desarrollo visualizando directamente la resolución virtual. Luego al alternar a modo HD se podrá ver la resolución final.

#### bool Debug

Indicar si la ejecución está en modo debug. Esta variable será utilizada por otras clases a modo de realizar pruebas, para habilitar/deshabilitar elementos debug.

#### bool Pause

Permite pausar el juego. Si esta variable está activa los métodos update de escenas entidad componentes no se ejecutarán.

#### Scene

La escena activa actual. Se puede cambiar por una nueva escena.

#### Camera

La cámara utilizada actualmente. Se puede reemplazar por otra cámara en caso de necesitar crear una cámara nueva.

#### Window

Permite el acceso a variables de configuración del objeto Window

#### GraphicsDevice

Permite acceder a graphicsDevice para configuración.

#### GraphicsDeviceManager

Permite acceder o utilizar el graphicDeviceManager para configuración.

#### Content

Permite acceder al contenido almacenado, será utilizado por elementos que necesiten cargar datos.

#### FullScreen FullScreenManager

Instancia de FullScreen, esta será utilizable por Manager para cambios en la visualización.

#### Input

Instancia de input única para el manejo de inputs de usuario.

#### IGameParameters GameParameters

Permite Indicar variables iniciales para el juego. Definiciones como el nombre del juego, datos de usuario, etc.

#### DialogBox

Instancia de dialogbox utilizable para mostrar texto en pantalla (Ideal para rpg).

### Read only

#### GameManager Instance

La instancia del gamemanager. Esta sería el punto de entrada al game manager para acceder a cada uno de sus atributos y métodos.

#### SCALE

Entrega la proporción de escala entre la resolución interna (virtual) y la resolución de la pantalla. 

#### ResolutionScale
Entrega la proporción inversa de escala entre la resolución interna (virtual) y la resolución de la pantalla.

#### DefaultFont
Entrega una fuente de texto por defecto, esta se puede utilizar para mostrar texto en pantalla.

## Métodos

### Update(GameTime)

Se maneja la lógica que debe actualizar cuadro a cuadro. Este método es ideal para agregar funciones globales que afectan a toda la aplicación, por ejemplo el control de pantalla completa o alternar entre modo debug y normal o modo hd/low res.