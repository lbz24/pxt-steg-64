let num_pixels = 64;
let display = neopixel.create(DigitalPin.P0, num_pixels, NeoPixelMode.RGB)
let scrollSpeed = 180;  // scroll speed for show_string

// set up colours used in pre-defined images
// note: make each colour divisble by 4 => least 2 significant bits of the binary will be zero
let w = neopixel.rgb(252, 252, 252);    // white
let b = neopixel.rgb(0, 0, 0);          // black
let gr = neopixel.rgb(180, 180, 180);   // grey
let dgr = neopixel.rgb(100, 100, 100);  // dark grey
let lr = neopixel.rgb(40, 0, 0);        // red
let r = neopixel.rgb(252, 0, 0);        // red
let o = neopixel.rgb(200, 100, 0);      // orange
let y = neopixel.rgb(252, 252, 0);      // yellow
let g = neopixel.rgb(0, 252, 0);        // green
let lg = neopixel.rgb(180, 252, 0);     // light green
let dg = neopixel.rgb(0, 60, 0);        // dark green
let lbl = neopixel.rgb(52, 180, 252);   // light blue
let bl = neopixel.rgb(0, 100, 152);     // blue
let dbl = neopixel.rgb(0, 0, 52);       // dark blue
let ind = neopixel.rgb(120, 120, 252);  // indigo
let br = neopixel.rgb(160, 112, 12);    // brown
let p = neopixel.rgb(252, 100, 252);    // pink
let pu = neopixel.rgb(160, 32, 240);    // purple

// set up pre-defined images
let heart = [
    b, b, b, b, b, b, b, b,
    b, b, r, r, b, r, r, b,
    b, r, y, o, r, r, r, r,
    b, r, o, r, r, r, o, r,
    b, b, r, r, r, o, r, b,
    b, b, b, r, r, r, b, b,
    b, b, b, b, r, b, b, b,
    b, b, b, b, b, b, b, b];

let apple = [
    b, b, b, br, br, b, b, b,
    b, b, b, b, br, b, b, b,
    b, r, r, r, b, r, r, b,
    r, o, o, r, r, r, r, r,
    r, o, r, r, r, r, r, r,
    r, r, r, r, r, r, r, r,
    b, r, r, r, r, b, r, b,
    b, b, r, r, b, r, b, b];

let dinosaur = [
    b, dg, dg, dg, dg, b, b, b,
    dg, b, dg, b, dg, b, b, b,
    dg, dg, dg, dg, dg, b, b, b,
    b, b, g, g, dg, b, b, b,
    b, g, lg, g, dg, b, b, b,
    b, b, lg, lg, dg, b, b, g,
    b, b, lg, lg, dg, g, g, b,
    b, b, g, b, dg, b, b, b];

let pacman = [
    b, b, y, y, y, y, dgr, b,
    b, y, y, y, y, y, y, dgr,
    y, y, y, y, y, dgr, b, b,
    y, y, y, y, dgr, b, b, b,
    y, y, y, y, dgr, b, b, b,
    y, y, y, y, y, dgr, b, b,
    b, y, y, y, y, y, y, dgr,
    b, b, y, y, y, y, dgr, b];

let ghost = [
    b, b, pu, ind, ind, lbl, b, b,
    b, pu, ind, ind, bl, bl, lbl, b,
    b, ind, ind, bl, bl, bl, bl, lbl,
    pu, ind, b, b, bl, b, b, bl,
    ind, ind, b, lbl, bl, b, lbl, bl,
    ind, ind, ind, bl, b, bl, bl, bl,
    ind, ind, ind, bl, bl, bl, bl, bl,
    ind, ind, b, bl, bl, b, bl, bl];

let alien = [
    lbl, bl, dbl, b, b, dbl, bl, lbl,
    b, b, dbl, bl, bl, dbl, b, b,
    b, b, bl, bl, bl, bl, b, b,
    b, lbl, b, bl, bl, b, lbl, b,
    b, lbl, lbl, bl, bl, lbl, lbl, b,
    b, b, b, bl, bl, b, b, b,
    b, dbl, dbl, b, b, dbl, dbl, b,
    b, b, bl, b, b, bl, b, b];

let crown = [
    pu, b, b, pu, b, b, b, pu,
    bl, pu, b, bl, pu, b, bl, pu,
    bl, bl, bl, bl, bl, bl, bl, pu,
    bl, bl, bl, y, bl, bl, bl, pu,
    bl, y, bl, bl, bl, y, bl, pu,
    bl, bl, bl, bl, bl, bl, bl, pu,
    dbl, dbl, dbl, dbl, dbl, dbl, dbl, pu,
    b, b, b, b, b, b, b, b];

let stars = [
    b, b, b, b, b, b, o, b,
    b, b, b, b, b, o, y, r,
    b, o, b, b, b, b, r, b,
    o, y, r, b, b, b, b, b,
    b, r, b, b, b, o, b, b,
    b, b, b, b, o, y, r, b,
    b, b, b, b, b, r, b, b,
    b, b, b, b, b, b, b, b];

let rainbow_vert = [
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b];

let black = [
    b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b];


// set up arrays of images
let imagesArr = [heart, apple, dinosaur, pacman, ghost, alien, crown, stars, rainbow_vert, black];
let namesArr = ["heart", "apple", "dinosaur", "pacman", "ghost", "alien", "crown", "stars", "rainbow", "black"];
let currentIndex = 0;
let currentPixel = 0;

// set up enumeration type (helpful as parameter to functions below)
enum Images {
    //% block="heart"
    Heart,
    //% block="apple"
    Apple,
    //% block="dinosaur"
    Dinosaur,
    //% block="pacman"
    Pacman,
    //% block="ghost"
    Ghost,
    //% block="alien"
    Alien,
    //% block="crown"
    Crown,
    //% block="stars"
    Stars,
    //% block="rainbow"
    Rainbow,
    //% block="black"
    Black
}

//--

// internal function to find array index from the enumeration type
// note: tried Object.values and keys but "property does not exist"
function findIndex(img: Images): number {
    switch (img) {
        case Images.Heart: return 0;
        case Images.Apple: return 1;
        case Images.Dinosaur: return 2;
        case Images.Pacman: return 3;
        case Images.Ghost: return 4;
        case Images.Alien: return 5;
        case Images.Crown: return 6;
        case Images.Stars: return 7;
        case Images.Rainbow: return 8;
        case Images.Black: return 9;
        default: return -1;
    }
}

// internal function to find enumeration type from the index
// note: if parameter is -1 return the current image as default
function findEnum(index: number): Images {
    if (index === -1)
        index = currentIndex;
    switch (index) {
        case 0: return Images.Heart;
        case 1: return Images.Apple;
        case 2: return Images.Dinosaur;
        case 3: return Images.Pacman;
        case 4: return Images.Ghost;
        case 5: return Images.Alien;
        case 6: return Images.Crown;
        case 7: return Images.Stars;
        case 8: return Images.Rainbow;
        case 9: return Images.Black;
        default: return Images.Black;
    }
}

//--

// internal function to display an image by its index number on the Zip64 leds
function showImageIndex(imgIndex: number): void {
    let thisImg = imagesArr[imgIndex];
    for (let i = 0; i < num_pixels; i++) {
        display.setPixelColor(i, thisImg[i]);
    }
    display.show();
    currentPixel = 0;       // used for moving around the image
}


// --
/**
 * Custom blocks for Cryptography - Steganography
 */

//% color="#B39EF3" weight=115
namespace cryptsteg {
    // SHOW IMAGE
    /**
     * showImage displays the selected image on the Zip64 leds
     * @param img the image to be displayed
     */
    //% block
    export function showImage(img: Images): void {
        currentIndex = findIndex(img);     // update currentIndex to this image
        showImageIndex(currentIndex);
    }


}