let num_pixels = 64;
let display = neopixel.create(DigitalPin.P0, num_pixels, NeoPixelMode.RGB)
let scrollSpeed = 180;  // scroll speed for show_string

// set up colours used in pre-defined images
// note: make each colour divisble by 4 => least 2 significant bits of the binary will be zero
const w = neopixel.rgb(252, 252, 252);    // white
const b = neopixel.rgb(0, 0, 0);          // black
const gr = neopixel.rgb(180, 180, 180);   // grey
const dgr = neopixel.rgb(100, 100, 100);  // dark grey
const lr = neopixel.rgb(40, 0, 0);        // red
const r = neopixel.rgb(252, 0, 0);        // red
const o = neopixel.rgb(200, 100, 0);      // orange
const y = neopixel.rgb(252, 252, 0);      // yellow
const g = neopixel.rgb(0, 252, 0);        // green
const lg = neopixel.rgb(180, 252, 0);     // light green
const dg = neopixel.rgb(0, 60, 0);        // dark green
const lbl = neopixel.rgb(52, 180, 252);   // light blue
const bl = neopixel.rgb(0, 100, 152);     // blue
const dbl = neopixel.rgb(0, 0, 52);       // dark blue
const ind = neopixel.rgb(120, 120, 252);  // indigo
const br = neopixel.rgb(160, 112, 12);    // brown
const p = neopixel.rgb(252, 100, 252);    // pink
const pu = neopixel.rgb(160, 32, 240);    // purple

// set up pre-defined images
const heart = [
    b, b, b, b, b, b, b, b,
    b, b, r, r, b, r, r, b,
    b, r, y, o, r, r, r, r,
    b, r, o, r, r, r, o, r,
    b, b, r, r, r, o, r, b,
    b, b, b, r, r, r, b, b,
    b, b, b, b, r, b, b, b,
    b, b, b, b, b, b, b, b];

const apple = [
    b, b, b, br, br, b, b, b,
    b, b, b, b, br, b, b, b,
    b, r, r, r, b, r, r, b,
    r, o, o, r, r, r, r, r,
    r, o, r, r, r, r, r, r,
    r, r, r, r, r, r, r, r,
    b, r, r, r, r, b, r, b,
    b, b, r, r, b, r, b, b];

const dinosaur = [
    b, dg, dg, dg, dg, b, b, b,
    dg, b, dg, b, dg, b, b, b,
    dg, dg, dg, dg, dg, b, b, b,
    b, b, g, g, dg, b, b, b,
    b, g, lg, g, dg, b, b, b,
    b, b, lg, lg, dg, b, b, g,
    b, b, lg, lg, dg, g, g, b,
    b, b, g, b, dg, b, b, b];

const pacman = [
    b, b, y, y, y, y, dgr, b,
    b, y, y, y, y, y, y, dgr,
    y, y, y, y, y, dgr, b, b,
    y, y, y, y, dgr, b, b, b,
    y, y, y, y, dgr, b, b, b,
    y, y, y, y, y, dgr, b, b,
    b, y, y, y, y, y, y, dgr,
    b, b, y, y, y, y, dgr, b];

const ghost = [
    b, b, pu, ind, ind, lbl, b, b,
    b, pu, ind, ind, bl, bl, lbl, b,
    b, ind, ind, bl, bl, bl, bl, lbl,
    pu, ind, b, b, bl, b, b, bl,
    ind, ind, b, lbl, bl, b, lbl, bl,
    ind, ind, ind, bl, b, bl, bl, bl,
    ind, ind, ind, bl, bl, bl, bl, bl,
    ind, ind, b, bl, bl, b, bl, bl];

const alien = [
    lbl, bl, dbl, b, b, dbl, bl, lbl,
    b, b, dbl, bl, bl, dbl, b, b,
    b, b, bl, bl, bl, bl, b, b,
    b, lbl, b, bl, bl, b, lbl, b,
    b, lbl, lbl, bl, bl, lbl, lbl, b,
    b, b, b, bl, bl, b, b, b,
    b, dbl, dbl, b, b, dbl, dbl, b,
    b, b, bl, b, b, bl, b, b];

const crown = [
    pu, b, b, pu, b, b, b, pu,
    bl, pu, b, bl, pu, b, bl, pu,
    bl, bl, bl, bl, bl, bl, bl, pu,
    bl, bl, bl, y, bl, bl, bl, pu,
    bl, y, bl, bl, bl, y, bl, pu,
    bl, bl, bl, bl, bl, bl, bl, pu,
    dbl, dbl, dbl, dbl, dbl, dbl, dbl, pu,
    b, b, b, b, b, b, b, b];

const stars = [
    b, b, b, b, b, b, o, b,
    b, b, b, b, b, o, y, r,
    b, o, b, b, b, b, r, b,
    o, y, r, b, b, b, b, b,
    b, r, b, b, b, o, b, b,
    b, b, b, b, o, y, r, b,
    b, b, b, b, b, r, b, b,
    b, b, b, b, b, b, b, b];

const rainbow_vert = [
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b];

const black = [
    b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b];

// set up arrays of images
const imagesArr = [heart, apple, dinosaur, pacman, ghost, alien, crown, stars, rainbow_vert, black];
const namesArr = ["heart", "apple", "dinosaur", "pacman", "ghost", "alien", "crown", "stars", "rainbow", "black"];
let currentIndex = 0;
let currentImage = imagesArr[currentIndex];
let currentPixel = 0;

// set up enumeration type (used in blocks)
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

// set a pixel colour on the Zip64 display
function showRGBPixel(pixel: number, red: number, green: number, blue: number): void {
    display.setPixelColor(pixel, neopixel.colors(neopixel.rgb(red, green, blue)))
    display.show()
}

// find image from the enumeration type
// note: tried Object.values and keys but "property does not exist"
function findImg(img: Images): number[] {
    switch (img) {
        case Images.Heart: return heart;
        case Images.Apple: return apple;
        case Images.Dinosaur: return dinosaur;
        case Images.Pacman: return pacman;
        case Images.Ghost: return ghost;
        case Images.Alien: return alien;
        case Images.Crown: return crown;
        case Images.Stars: return stars;
        case Images.Rainbow: return rainbow_vert;
        case Images.Black: return black;
        default: return black;
    }
}

// find array index from the enumeration type
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


// find enumeration type from the index
// note: if parameter is -1 return the current image as default
/*function findEnum(index: number): Images {
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
*/

// create a (deep) copy of an image
function copyImg(img: number[]): number[] {
    let thisImg: number[] = [];
    // reset the colours to those from original image (deep copy)
    for (let i = 0; i < num_pixels; i++) {
        thisImg[i] = img[i];
    }
    return thisImg;
}

// display an image on the Zip64 leds
function displayImage(img: number[]): void {
    for (let i = 0; i < num_pixels; i++) {
        display.setPixelColor(i, img[i]);
    }
    display.show();
    //update current index and current image
    currentImage = img;
    
}

// find the next index (based on length of images array)
// note: doesn't update currentIndex or currentImage
function findNextIndex(): number {
    nextIndex = currentIndex++;
    nextIndex = currentIndex % imagesArr.length;
    return nextIndex;
}

// display the next image (from those images array) on the Zip64 leds
function displayNextImage(): void {
    displayImage(imagesArr[findNextIndex]);
    for (let i = 0; i < num_pixels; i++) {
        display.setPixelColor(i, img[i]);
    }
    display.show();
}

// display an image by its index number
function showImageIndex(imgIndex: number): void {
    let thisImg = imagesArr[imgIndex];
    showImageOnDisplay(thisImg);
}

// return array with r,g,b components from the decimal colours
function getRGB(colour: number): number[] {
    let r = Math.floor(colour / 256 / 256);
    let g = Math.floor(colour / 256) % 256;
    let b = colour % 256;
    let rgb_array = [r, g, b];
    return rgb_array;
}


// --------------------------------------
// functions relating to showing cryptographic images
// --------------------------------------

// set up messages that will be hidden in each of the pre-defined images
const steg_msgs = [
    "cyber",
    "forensic expert",
    "security analyst",
    "ethical hacker",
    "cyber psychologist",
    "cyber ethics consultant",
    "security trainer",
    "risk assessor",
    "threat hunter",
    "social engineering analyst"
];

// check if parameter is a single character
function isLetter(s: string): boolean {
    if (s.length === 1) {
        return s.toLowerCase() != s.toUpperCase();
    }
    else
        return false;
}

// encode the binary string into the given colour (supports encode string)
function encodePixel(letter_binary: string, pixel_colour: number): NeoPixelColors {
    // get rgb colour (as array) for given pixel of given image
    let rgb = getRGB(pixel_colour);  // rgb is array [r, g, b]
    let rgb_str = ["", "", ""];

    for (let i = 0; i < 3; i++) {
        rgb_str[i] = convertDecBin(rgb[i], 8);
        rgb_str[i] = rgb_str[i].slice(0, -2); // get rid of 2 least significant bits (steganography method)
        rgb_str[i] = rgb_str[i] + letter_binary.slice(0, 2);  // replace with part of the binary letter
        letter_binary = letter_binary.slice(2);
        // convert binary to integer
        rgb[i] = convertBinDec(rgb_str[i]);
        //basic.showString(">" + rgb[i] + "<")
    }

    // return the new colour that contains the encoded values 
    return neopixel.rgb(rgb[0], rgb[1], rgb[2]);
}

// encode the string in the given image, starting at the specified pixel
function encodeStr(str: string, img: number[], pixel: number): void {
    currentImage = copyImg(img)
    let this_colour: NeoPixelColors
    let num = 0;
    let letter_binary = ""
    for (let i = 0; i < str.length; i++) {
        // check this character is single char, get ascii and convert to 1..26 for a-z (other chars -> 0)
        if (isLetter(str.charAt(i).toLowerCase())) {
            num = str.charCodeAt(i) - "a".charCodeAt(0) + 1;
            letter_binary = convertDecBin(num, 6);
            //basic.showString(">" + letter_binary + "<")

            this_colour = encodePixel(letter_binary, currentImage[pixel + i]);
        }
        else
            this_colour = encodePixel("000000", currentImage[pixel + i]);
        currentImage[i] = this_colour;
    }

    showImageOnDisplay(currentImage);
}

// --------------------------------------
// functions relating to decimal <-> binary conversions
// --------------------------------------

// convert from binary number (as a string) to decimal
// note: expected num is 0..63; returned str will be 6 bit binary
function convertBinDec(bin_num: string): number {
    let multiplier = 1;
    let result = 0;
    for (let i = bin_num.length - 1; i >= 0; i--) {
        if (bin_num[i] === "1")
            result = result + multiplier;
        multiplier = multiplier * 2;
    }
    return result;
}

// convert from decimal number to binary string (recursively)
// note: returned binary number should include all leading zeros
// note: tried using toString with radix 2, but reported error (expected no parameter) 
function recursiveDecBin(dec_num: number): string {
    if (dec_num === 0)
        // base case: return "0" if dec_num=0 
        return "0";
    else {
        // first part: recursive call with integer division of dec_num by 2
        // second part: append remainder (gives string)
        return (recursiveDecBin(Math.floor(dec_num / 2))
            + (dec_num % 2));
    }
}

// convert from decimal number to binary string (recursively)
// this is the wrapper function for recursiveDecBin
// note: expected num bits is 6 or 8; returned str will be 6 or 8 bit binary
function convertDecBin(dec_num: number, bits: number): string {
    if (bits === 6) {
        // only convert 0..63 (to give 6 bit binary). Otherwise return 0
        if (dec_num > 63 || dec_num < 0)
            return "000000"
    }
    else if (bits === 8) {
        // only convert 0..255 (to give 8 bit binary). Otherwise return 0
        if (dec_num > 255 || dec_num < 0)
            return "00000000"
    }

    // dec_num is in correct range, so call to recursive function
    let bin = recursiveDecBin(dec_num);

    // ensure returned str is 6 or 8 bit binary
    let len = bin.length;
    if (len > bits) {
        // get rid of leading zero from recursive function
        return bin.slice(1);
    }
    else {
        // pad with leading zeros to get 6 bit binary
        for (let i = 0; i < bits - len; i++)
            bin = "0" + bin;
        return bin;
    }
}

// --------------------------------------
// functions relating to ZIP64 buttons
// --------------------------------------

// --- CONTROL GREEN BUTTONS ---

// -- TOP GREEN BTN: SHOW RGB COLOUR as string on MICRO:BIT --
function showRGBcolour(): void {
    let colour = imagesArr[currentIndex][currentPixel];
    let colour_array = getRGB(colour);
    basic.showString(colour_array[0] + "," + colour_array[1] + "," + colour_array[2], scrollSpeed);
}

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire1, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    showRGBcolour();
})

// -- BOTTOM GREEN BTN: SHOW 2 LSBs as BINARY string on MICRO:BIT --
function get2LeastSig(): void {
    let colour = imagesArr[currentIndex][currentPixel];
    let colour_array = getRGB(colour);  // rgb array: [r, g, b]
    let result = "";
    for (let i = 0; i < 3; i++) {
        let str = convertDecBin(colour_array[i], 8) // convert as 8 bit binary
        let LSBs = str.slice(-2); // get 2 least significant bits
        result = result + LSBs + ",";
    }
    basic.showString(result.slice(0, -1), scrollSpeed);
}

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire2, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    get2LeastSig();
})

// --- CONTROL MOVEMENT ---
// as user changes pixel position, temporarily highlight the new pixel position
function tempHighlightPixel(): void {
    // get original colour of pixel
    let colour = imagesArr[currentIndex][currentPixel];
    let colour_array = getRGB(colour);

    // change pixel to white
    display.setPixelColor(currentPixel, neopixel.colors(NeoPixelColors.White))
    display.show();
    basic.pause(100);

    // change back to original colour
    display.setPixelColor(currentPixel, neopixel.rgb(colour_array[0], colour_array[1], colour_array[2]))
    display.show();
}

// control movement around the Zip64 display
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    currentPixel++;
    if (currentPixel % 8 === 0)
        currentPixel = currentPixel - 8;
    tempHighlightPixel();
})

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    currentPixel--;
    if (currentPixel < 0 || currentPixel % 8 === 7)
        currentPixel = currentPixel + 8;
    tempHighlightPixel();
})

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Down, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    currentPixel = currentPixel + 8;
    if (currentPixel > 63)
        currentPixel = currentPixel - 64;
    tempHighlightPixel();
})

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    currentPixel = currentPixel - 8;
    if (currentPixel < 0)
        currentPixel = currentPixel + 64;
    tempHighlightPixel();
})


// --------------------------------------
/**
 * Custom blocks for Cryptography - Steganography
 */
// --------------------------------------

//% color="#B39EF3" weight=115
namespace cryptsteg {

    // SHOW NEXT ENCRYPTED IMAGE
    /**
     * showNextStegImage displays the next steganographic image
     */
    //% block="show next steganographic image"
    export function showNextStegImage(): void {
        currentIndex++;
        currentIndex = currentIndex % imagesArr.length;
        encodeStr(steg_msgs[currentIndex], findEnum(currentIndex), 0);
    }

    // SHOW ENCRYPTED IMAGE
    /**
     * show a message encrypted in the given image (steganography)
     */
    //% block="show steganographic image $img"
    export function showStegImg(img: Images): void {
        currentIndex = findIndex(img);     // update currentIndex to this image
        encodeStr(steg_msgs[currentIndex], img, 0);
    }


    // SHOW COLOUR
    /**
     * show the given rgb colour at the specified pixel 
     * note: show colour doesn't write this information to the underlying image
     */
    //% block="show colour red $red|green $green|blue $blue|at pixel $pixel"
    //% pixel.min=0 pixel.max=63 v.defl=0
    //% red.min=0 red.max=255 red.defl=0
    //% green.min=0 green.max=255 green.defl=0
    //% blue.min=0 blue.max=255 blue.defl=0
    //% inlineInputMode=inline
    export function showColour(pixel: number, red: number, green: number, blue: number): void {
        showRGBPixel(pixel, red, green, blue);
    }

    // CLEAR DISPLAY
    /**
     * clearDisplay clears the image from the Zip64 leds
     */
    //% block
    export function clearDisplay(): void {
        display.clear();
        display.show();
        currentIndex = findIndex(Images.Black);
    }

    // SHOW NEXT IMAGE
    /**
     * showNextImage displays the next of the pre-defined images on the Zip64 leds
     */
    //% block
    export function showNextImage(): void {
        currentImg = findNextImage(currentImg); // update current image
        showImage(currentImg);
    }

    // SHOW IMAGE
    /**
     * showImage displays the selected (original) image on the Zip64 leds
     * @param img the image to be displayed
     */
    //% block
    export function showImage(img: Images): void {
        xxx currentIndex = findIndex(img);     // update currentIndex to this image
        xxx
        displayImage(currentImage);
    }

}