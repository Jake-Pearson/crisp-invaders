let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . e e e e e e e e e e . . . 
    . . e e e e e e e e e e e . . . 
    . e e e e e e e e e e e e . . . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e . . 
    . e e e e e e e e e e e e e . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.splash("Crisp", "Invaders")
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ...........22...................................................................................................................................................
    ..........2.2...................................................................................................................................................
    2........2..2...................................................................................................................................................
    2........2..2......................2............................................................................................................................
    .2......2....2....................22............................................................................................................................
    .22.....2....2....................2.2...........................................................................................................................
    .22....2.....2....................2..2..........................................................................................................................
    .2.2...2.....2....................2..2.............................2............................................................................................
    .2.2..2.......2...................2...2.............................2.................................2.........................................................
    .2..2.2.......2...................2...2.............................2................................2..........................................................
    .2..22.........2..................2....2.............................2..............................2...........................................................
    ..2..2.........2..................2....2.............................2............22222222..........2...........................................................
    ..2..2..........2.................2.....2............................2...........2........22........2...........................................................
    ..2.2.2.........2.................2......2............................2.........2...........2.......2...........................................................
    ..2.2..2.........2...............2.......2............................2........2.............22.....2................22.........................................
    ..2.2..2.........2...............2........2............................2.......2...............2....2................2.22.......................................
    ..22....2........2...............2.........2...........................2......2................2....2.................2..2...2..................................
    ..22....2........2...............2.........2............................2....2..................2...2.................2..2...2..................................
    ...2.....2........2..............2..........2...........................2....2..................2...2.................2...2.2.2.................................
    ...2.....2........2..............2...........2...........................2...2...................2..2.2222222.........2...22..2.................................
    ..22......2.......2..............2............2..........................2..2.................22222222.......22222....2....2..2.................................
    ..22......2........2.............2............2..........................2..2............22222....2..2............22222....22.2.................................
    ..22.......2.......2.............2.............2..........................2.2..........22..........2.2.................2222.2.2.................................
    ..22.......2........2............2..............2.........................22..........2............2..2................2..22.2.2................................
    ..22.......2........2............2..............2..........................2........22..............2.2................2..2.22.2................................
    ..22........2........2..........2................2.........................2.......2................2.2.................2.2...22................................
    ....2.......2.........2.........2.......22........2.......................22......2..................2.2................22....2222..............................
    ....2........2........2.........2.......22.........2......................22......2...................22................22.....22.22............................
    ....2........2.........2........2.......2.2........2......................2.2.....2...................2.2................2.....22...22..........................
    ....2.........2........2........2......2..2.........2....................2..2.....2....222222222222222222222222222222222222.....2.....22........................
    ....2.........2.........2.......2......2...2.........2...................2..2....2.2222................2.2...............2.22...2.......2.......................
    ....2..........2.........2......2......2...2..........22.................2..2...222....................2.2.....2.........2...222.2.......2......................
    ....2..........2..........2.....2.....2.....2...........2................2..2..2.2......................22.....2.........22.....22.......2......................
    .....2.........2...........2...2......2......2...........22..............2...22..2......................2.2....2.........22......2222.....2.....................
    .....2..........2...........2..2......2......2.............2.............2...2...2......................2..2..2..........22......22..22....2................2...
    .....2..........2............2.2......2.......2.............22..........2...22....2......................2.2.2...........2.2......2....222.2................2...
    .....2...........2............22......2.......2...............2....22222222222222222222..................2..2..2222222222222222...22......222...............2...
    .....2...........2....................2........2...........22222222.....2...2.....2....2222222222222222..2.2222..........2.2...222222.......22..............2...
    .....2............2...................2........2...22222222......22.....2...2.....2....................2222..............2..2.....2.222222....22............2...
    .....2............2...................2.......22222................22...2...22....2......................2222............2..2......22.....22222.22..........2...
    ......2...........2...................2.....22..2....................22.2...2.2...2.....................2.2..222.........2...2.....2.2........222.2.........2...
    ......2............2..................2....2....2......................22...2..2..2.....................2.2.....222......2...2.....2.2..........22222.......2...
    ......2............2..................2..22......2.....................2.2222...2.2.....................2..2.......222...2...2.....2.2..........2....22.....2...
    ......2.............2.................222........2.....................2.........22.....................2..2..........2222....2.....22..........2.....222...2...
    .......2............2.................2..........2.....................2..........2222..................2..2.............222..2.....22..........2......2.2..2...
    .......2.............2..............222...........2....................2..........2...222...............2...2............2..2222....22..........2.......22..2...
    .......2.............2.............2..2...........2....................2..........2......22.............2...2............2.....22...2.2..........2......22..2...
    .......2..............2..........22...2...........2....................2...........2.......222...........22.2............2.....2.22.2.2..........2.......22.2...
    ........2.............2.........2.....2............2..................2............2..........222..........222...........2......2..22.2..........2........2.2...
    ........2..............2.......2......2............2..................2.............2............2222........22..........2......2...222..........2........222...
    ........2..............2.......2......2............2..................2..............2...............222.....2.22........2.......2...22..........2.........22...
    ........2...............2.....2.......2.............2.................2..............2..................2222.2...22......2.......2...2222.........2........22...
    .........2..............2.....2.......2.............2.................2...............2.....................222....22....2.......2...22..2........2.........2...
    .........2...............2....2.......2..............2................2...............2.......................22222..222.2........2..2.2..22......2.........22..
    .........2...............2...2........2..............2...............2.................2......................2....22222222.......2...22....2....2..........222.
    ..........2...............2..2........2..............2...............2..................2......................2.........222222222222.22.....22..2..........222.
    ..........2...............2...2.......2...............2..............2..................2......................2.........2...222...2.222222222222222222222222222
    ..........2................2..2.......2...............2..............2...................2.....................2.........2......222222222.......22.....22222222.
    ..........2................2..2.......2...............2..............2....................2....................2........2...........2.22.22222222222222.......2.
    ...........2......222222....2..2......2................2.............2.....................2....................2.......2...........2.2.2......2..2............2
    ...........2....22......2...2..2......2................2.............2......................22..................2.......2............2.22......2...2...........2
    ...........2...2.........2...2..2.....2................2.............2........................2.................2.......2............2.22.....2....2...........2
    ...........2..2...........2..2..2.....2.................2............2.........................2.................2......2.............222.....2.....2..........2
    ............22............2...2.2.....2.............2...2............2..........................2................2......2.............222.....2.....2..........2
    ............22............2...2..2....2.............2...2............2...........................2...............2......2..............22....2.......2.........2
    ............2.............2....2.2....2.............2....2...222222222222222222222................2..............2......2..............22...2........2.........2
    ...........22.............2....2.2....2.............2..222222........2............222..............22.............2.....2..............22..2..........2........2
    ...........2.2............2.....2.22..2...........22222..2...........2...............222.............2............2.....2..............2222...........2.......2.
    ..........2..2.............2....2...222........222..2.....2.........2...................22............22..........2.....2..............22..............2.....2..
    .........2...2.............2.....2....22......2.....2.....2.........2.....................222...........22.........2....2..............222.............2....2...
    .........2...2.............2.....2....2.22...2.......2....2.........2........................222..........2........2....2.............2222..............2..2....
    ........2.....2............2......2...2...222........2.....2........2...........................22.........22......2....2............2.222..............2.2.....
    .......2......2............2......2...2....222.......2.....2........2.............................2..........22....2....2..........22...22..............22......
    .......2......2............2.......2..2...2...222....2.....2........2..............................22..........222..2...2.........2.....22............222.......
    ......2.......2............2.......2..2...2......22222......2.......2................................2............2222..2........2......22.......22222..2.......
    .....2.........2...........2........2.2...2..........2222...2.......2.................................2.............2.222.....222.......22...2222.......2.......
    .....2.........2...........2.........22...2..........2...2222.......2..................................22............2..222222222222222222222...........2.......
    ....2..........2...........2.........22....2.........2.......2222...2....................................2..........22222...............2...............2.......
    ....2...........2..........2..........2....2.........2.......2...2222.....................................2..2222222.2..2...............2...............2.......
    ....2...........2..........2...............2.........2.......2......222222222222222.................222222222........2..2...............2...............2.......
    ....2...........2..........2................2........2........2.....2..............22222222222222222.........2........2.2................2..............2.......
    ....2...........2..........22...............2........2........2.....2.........................................2.......2.2................2..............2.......
    ....2............2.........22...............2........2........2.....2..........................................22.....2.2...............2..............2........
    ....2............2.........22................22......2.........2....2............................................2.....22...............2.............2.........
    ....2............2.........22..................22....2.........2....2............................................2.....22...............2............2..........
    .....2...........2.........22....................22..2..........2...2...........22................................2....22..............2............2...........
    .....2............2........22......................222..........2...2.............2222.............................2...22..............2..........22............
    .....2............2........22........................222........2...2.................2222.........................2....2.............2..........2..............
    .....2............2........22...................2222222222222222222222....................222.......................2.................2.........2...............
    .....2............2........22.................22....2......222...2..2.22222222...............2222....................2...............2.........2................
    .....2.............2.......22................2......2.........22222.2.........2222...............222.................2.............22........22.................
    .....2.............2.......22................22....2..............222.............22................222...............2..........22......2222...................
    .....2..............2......22.2................22..2...............22222............22.................2222............2........2.....222.......................
    .....2..............2.....2..22..................222...............22...22222222......2....................222.........2......22...222..........................
    .....2...............2...2.........................222.............2............2222222222222.................222.......2...22.2222.............................
    ......2..............2...2........................2...222............................22......2222222222222222222222222222222222.................................
    ......2...............2.2.........................2......222.......................22................................22222......................................
    ......2...............22..........................2.........2222222.............222...........................22222222..222.....................................
    ......2..........................................2.................2222222222222...............222222222222222..........2..22...................................
    ......2..........................................2......................222222222222222222222222222222222...............2....222................................
    ......2.........................................2...................222222...............................22222222.......2.......222.............................
    .......2........................................2.............222222.............................................22222222..........22...........................
    .......2.......................................2..............2.........................................................2222222......222........................
    .......2.......................................2........................................................................2......22222....22......................
    .......2......................................2.........................................................................2...........2222..222...................
    .......2......................................2.........................................................................2...............22222222................
    .......2.....................................2..........................................................................2....................22222..............
    ........2....................................2..........................................................................2.........................2222..........
    .........2..................................2...........................................................................2............................2222.......
    ..........2................................2............................................................................2...............................222.....
    ...........2.............................22...............................................................................................................2222..
    ............2...........................2....................................................................................................................222
    .............22........................2........................................................................................................................
    ...............22.....................2.........................................................................................................................
    .................22..................2..........................................................................................................................
    ...................22..............22...........................................................................................................................
    .....................22...........2.............................................................................................................................
    .......................22222222222..............................................................................................................................
    ................................................................................................................................................................
    `)
