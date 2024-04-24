# Prova Tècnica - Aplicació de Fotògrafs


## Característiques Implementades

### 1. Obtenció de Dades

- L'aplicació obté les dades de fotògrafs i consumeix un servei web extern mitjançant una sol·licitud GET.
- S'utilitza autenticació bàsica per accedir al servei web. Les credencials (usuari i contrasenya) es proporcionen de forma estàtica al codi.

### 2. Llistat de Fotògrafs

- Un cop obtingudes les dades, es mostren en una llista a la pantalla principal de l'aplicació.
- Cada element de la llista mostra informació bàsica del fotògraf, com ara el nom i una imatge representativa.

### 3. Persistència de Dades

- Les dades obtingudes s'emmagatzemen localment al navegador utilitzant l'emmagatzematge local (localStorage). Això permet que les dades persisteixin fins i tot després de tancar i tornar a obrir laplicació.

### 4. Detalls del Fotògraf

- L'aplicació permet visualitzar detalls complets d'un fotògraf seleccionat. En fer clic a un fotògraf de la llista, es mostra una pàgina de detall amb informació addicional.

### Característiques Addicionals

#### Lazy Loading per al Detall de Fotògraf

- He implementat lazy loading per a la càrrega de la pàgina de detall del fotògraf. Això millora el rendiment de l'aplicació en carregar els detalls només quan l'usuari ho demana.

#### Infinite Scroll per a la Llista de Fotògrafs

- S'ha afegit la funcionalitat d'infinite scroll a la llista de fotògrafs. Quan l'usuari arriba al 90% de la llista, es carreguen automàticament més fotògrafs i així es permet una experiència de navegació contínua.

## Instal·lació i Execució

- Navega en el teu terminal fins a l'ubicació del projecte.
- Executa el comandament `npm install` per a instalar les dependencies del projecte.
- Executa el comandament `ng serve -o` per a visualitzar el projecte en el teu navegador predeterminat.

## Notes Importants

Assegureu-vos de tenir una connexió a Internet activa perquè l'aplicació pugui obtenir les dades dels fotògrafs del servei web extern.

Aquesta aplicació ha sigut desenvolupada en la versió 17.0.9 d'Angular.
