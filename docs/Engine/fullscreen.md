# Fullscreen
Este componente se encargará de la visualización en pantalla completa.


## Atributos

- public bool _isFullscreen (false)

### _isFullscreen (bool)

Esta propiedad permite saber si la aplicación se está visualizando actualmente en fullScreen. En GameManager se utiliza para saber si en caso de que la aplicación este en pantalla completa se utilice la resolución máxima (1920x1080).

:::danger Importante

Se debe implementar una forma de obtener la resolución del host y setear esa como la resolución de pantalla completa

:::


## Métodos públicos

- void ToggleFullscreen()
- void ToggleBorderless()

### ToggleFullscreen

Este método alterna entre pantalla completa y modo ventana cada vez que se ejecuta. 

### ToggleBorderless

Este método alterna entre pantalla completa en modo borderless y modo ventana.

## constructor
- FullScreen(GraphicsDeviceManager, GameWindow, Vector2)
