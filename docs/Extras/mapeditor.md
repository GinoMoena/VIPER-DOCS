---
sidebar_position: 2
---

# MapEditor

Map editor es una herramienta interna que permite generar mapas a través de la misma aplicación.


## MapLevel

Almacena la información de un nivel, los tiles que contiene y las lineas que también almacena, estos los almacena en las siguientes listas:

- tileList: lista con tiles repartidos en el mapa.
- lineList: lista de lineas repartidas en el mapa.
- groundList: lista de líneas que funcionan como suelo en el mapa.
- wallList: lista de líneas que funcionan como murallas en el mapa.
- slopeList: lista de líneas que funcionan como inclinaciones en el suelo del mapa.

## MapLine

Esta clase contiene las definiciones de una línea de un punto A(x, y) a un punto B(x, y) en el contexto de un MapLevel. Se utiliza como se comentó en MapLevel para definir distintos tipos de restricciones de movimiento como suelo, murallas y slopes.

## MapTile

Esta clase contiene las definiciones para agregar un tile (unidad mínima en mapa, por lo general de 16x16), simplemente define su posición en un punto (x, y). Además contiene banderas útiles como `solid` que permite saber si este objeto puede utilizarse como una plataforma por la que subir por abajo.

miDodeAa
