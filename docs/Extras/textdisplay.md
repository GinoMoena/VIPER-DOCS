---
sidebar_position: 3
---

# TextDisplay

Este componente tiene dos grandes utilidades, la primera es obtener textos desde un archivo el cual puede ser modificable para agregar más textos o modificar el idioma de los textos para ayudar con la internacionalización.

## Texts `Singleton`

Esta clase es la encargada de leer todos los textos de la aplicación, a través de `Text.GetText("codigo.de.texto")` permitirá obtener la etiqueta asociada al código `codigo.de.texto` en el archivo `Content/Text/npc_dialogs.properties`. Como se puede inferir en este último punto, esta funcionalidad no está del todo acabada, por lo que en un futuro se podría modificar el archivo que consume para estos textos y no limitarlo solo a npc, sino a todo texto de la aplicación que sería lo ideal.

## DialogBox `Entity`

Dialogbox es una entidad que permite el despliegue de cuadros de textos en la aplicación, en resumen es una utilidad rápida y básica para desplegar textos como si de un juego rpg se tratase, la idea es simplificar los procesos. Calcula automáticamente cuanto texto mostrar por pantalla y contiene métodos mínimos para su gestionamiento.

### Métodos

Esta clase se pensó para que su forma de ser utilizada sea la más simple posible, por lo mismo su gestionamiento se realiza automáticamente al colgar cualquier tipo de pantalla y en cualquier punto de la aplicación se podrá desplegar un dialogo de texto utilzando sus métodos estáticos sin necesidad de generar una instancia del dialogBox.

#### ShowText (string text) `static void`

Permite desplegar un texto cualquiera, este texto se motrará en pantalla sobre todo lo demás. Considerar que este texto desplegado no se quitará automaticamente por lo que será necesario utilizar el método NextSentence() en algún botón para que avance el texto indicado.

#### NextSentence `static void`

Se encarga de gestionar el progreso de una cadena de texto, avanzará al siguiente cuadro de texto en caso de que haya uno disponible, en caso de que se haya acabado el texto a desplegar este método cerrará la ventana.
