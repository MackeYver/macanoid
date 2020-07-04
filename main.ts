//
// Data
//

const g_levels_data: number[][] = [
    [ // 0
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  2,  2,  2,  2,  2,  2,  2,  0,  0,  0,
         0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    ],

    [ // 1
        0,  0,  0,  3,  3,  3,  0,  3,  3,  3,  0,  0,  0,
        0,  0,  0,  2,  2,  2,  2,  2,  2,  2,  0,  0,  0,
        0,  0,  0,  1,  1,  1,  3,  1,  1,  1,  0,  0,  0,
        0,  0,  0,  0,  0,  6,  6,  6,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
   ],

    [ // 2
        0,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  6,  4,  6,  0,  0,  0,  0,  0,
        0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,
        0,  0,  1,  3,  3,  3,  3,  3,  3,  3,  1,  0,  0,
        0,  0,  1,  3,  0,  3,  3,  3,  0,  3,  1,  0,  0,
        0,  0,  1,  3,  0,  3,  3,  3,  0,  3,  1,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    ],

    [ // 3
        0,  0,  0,  0,  0,  6,  0,  6,  0,  0,  0,  0,  0,
        0,  6,  1,  1,  1,  1,  1,  1,  1,  1,  1,  6,  0,
        0,  6,  1,  1,  1,  1,  5,  1,  1,  1,  1,  6,  0,
        0,  6,  2,  2,  2,  5,  5,  5,  2,  2,  2,  6,  0,
        0,  6,  2,  6,  5,  5,  5,  5,  5,  6,  2,  6,  0,
        0,  6,  3,  3,  6,  5,  5,  5,  6,  3,  3,  6,  0,
        0,  6,  3,  3,  3,  5,  5,  5,  3,  3,  3,  6,  0,
        0,  6,  6,  4,  4,  6,  5,  6,  4,  4,  6,  6,  0,
        0,  0,  6,  6,  4,  4,  4,  4,  4,  6,  6,  0,  0,
        0,  0,  0,  6,  6,  6,  6,  6,  6,  6,  0,  0,  0,
        0,  0,  0,  0,  6,  6,  6,  6,  6,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,        
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,        
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    ],

    [ // 4
        0,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        1,  2,  3,  0,  0,  0,  0,  0,  0,  0,  3,  2,  1,
        1,  2,  3,  0,  0,  6,  0,  6,  0,  0,  3,  2,  1,
        1,  2,  3,  4,  5,  6,  0,  6,  5,  4,  3,  2,  1,
        1,  2,  3,  4,  5,  6,  0,  6,  5,  4,  3,  2,  1,
        6,  6,  6,  6,  6,  6,  0,  6,  6,  6,  6,  6,  6,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
   ],    

    [ // 5
        0,  0,  0,  0,  0,  3,  3,  3,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  3,  5,  3,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  3,  5,  3,  0,  0,  0,  0,  0,
        0,  2,  2,  2,  0,  3,  5,  3,  0,  2,  2,  2,  0,
        0,  2,  4,  2,  0,  3,  5,  3,  0,  2,  4,  2,  0,
        0,  2,  2,  2,  0,  3,  3,  3,  0,  2,  2,  2,  0,
        0,  0,  0,  0,  0,  6,  6,  6,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  2,  2,  2,  2,  2,  2,  2,  0,  0,  0,
        0,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  0,
        3,  3,  4,  3,  3,  3,  4,  3,  3,  3,  4,  3,  3,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        6,  6,  3,  6,  6,  6,  3,  6,  6,  6,  3,  6,  6,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    ],

    /*
    [ // 6
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    ],
    */   
];

const g_levels_backgrounds: number[] = [
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
];

const g_block_values: number[] = [
    0,
    10,
    20,
    30,
    40,
    50,
    80,
];

let g_block_normals: Vector2[] = [
    {x: -1, y:  0},
    {x:  0, y:  1}, 
    {x:  1, y:  0},
    {x:  0, y: -1},        
];

interface Powerup_Probability {
    prob: number,
    allowed_powerups: number[],
    allowed_powerups_prob: number[]
};

const g_block_powerup_probs: Powerup_Probability[] = [
    {prob:0   , allowed_powerups:[]       , allowed_powerups_prob:[]},
    {prob:0.2 , allowed_powerups:[0]      , allowed_powerups_prob:[1]},
    {prob:0.25, allowed_powerups:[0]      , allowed_powerups_prob:[1]},
    {prob:0.2 , allowed_powerups:[0, 1]   , allowed_powerups_prob:[0.5, 1]},
    {prob:0.25, allowed_powerups:[0, 1]   , allowed_powerups_prob:[0.3, 1]},
    {prob:0.3 , allowed_powerups:[0, 1, 2], allowed_powerups_prob:[0.4, 0.6, 1]},
    {prob:0   , allowed_powerups:[]       , allowed_powerups_prob:[]},
];

const g_powerup_value: number[] = [
    50, // Paddle
    50, // Lasers
    50, // Ball_Is_Op
    //100,
    //100,
];

const g_powerup_duration: number[] = [
    25,
    10,
    15,
    //10,
    //10,
];





//
// Mathematics
//

interface Vector2 {
    x: number;
    y: number;
};

function new_vector(x: number, y: number): Vector2 {
    let result: Vector2 = {x: x, y: y};
    return result;
}

function mul(A: Vector2, B: Vector2): Vector2 {
    let result: Vector2 = {x: A.x * B.x, y: A.y * B.y};
    return result;
}

function smul(s:number, A: Vector2): Vector2 { // No function overloading?
    let result: Vector2 = {x: s * A.x, y: s * A.y};
    return result;
}

function sub(A: Vector2, B: Vector2): Vector2 {
    let result: Vector2 = {x: A.x - B.x, y: A.y - B.y};
    return result;
}

function add(A: Vector2, B: Vector2): Vector2 {
    let result: Vector2 = {x: A.x + B.x, y: A.y + B.y};
    return result;
}

function dot(A: Vector2, B: Vector2): number {
    let result: number = A.x * B.x + A.y * B.y;
    return result;
}

function magnitude(A: Vector2): number {    
    let square: number = A.x * A.x + A.y * A.y;
    return Math.sqrt(square);
}

// Normalize Or Zero (NOZ)
function noz(A: Vector2): Vector2 { 
    let result: Vector2 = {x: 0, y: 0};

    let square: number = A.x * A.x + A.y * A.y;
    if (square > 0) {
        let length: number = Math.sqrt(square);
        result.x = A.x / length;
        result.y = A.y / length;
    }
    
    return result;
}

function approx_equal(a: number, b: number, tolerance: number = 0.01): boolean {
    let result: boolean = Math.abs(a - b) < tolerance;
    return result;
}


//
// Collision detection and response
interface Intersection_Info {
    exists: boolean;
    P: Vector2;
};

function calculate_line_intersection(P1: Vector2, P2: Vector2, P3: Vector2, P4: Vector2): Intersection_Info {
    // Source: Graphics Gems III, page 199, by David Kirk
    let P: Vector2 = new_vector(0, 0);

    let A: Vector2 = sub(P2, P1);
    let B: Vector2 = sub(P3, P4);
    let C: Vector2 = sub(P1, P3);

    let denominator = (A.y * B.x) - (A.x * B.y);
    let numerator_a = (B.y * C.x) - (B.x * C.y);
    let numerator_b: number = 0;
    
    let collision_is_still_possible: boolean = true;
    if (denominator > 0) {
        if (numerator_a < 0 || numerator_a > denominator) {
            collision_is_still_possible = false;
        }
    }
    else if (numerator_a > 0 || numerator_a < denominator) {
            collision_is_still_possible = false;
    }

    if (collision_is_still_possible) {
        numerator_b = (A.x * C.y) - (A.y * C.x);
        if (denominator > 0) {
            if (numerator_b < 0 || numerator_b > denominator) {
                collision_is_still_possible = false;
            }
        }
        else if (numerator_b > 0 || numerator_b < denominator) {
            collision_is_still_possible = false;
        }
    }

    if (collision_is_still_possible && !approx_equal(denominator, 0, 0.01)) {
        let a: number = numerator_a / denominator;        

        if ((a >= 0 && a <= 1)) {
            P = add(P1, smul(a, A));
        }
        else {
            collision_is_still_possible = false;
        }
    }
    

    let exists = collision_is_still_possible;
    return {exists, P};
}

interface Rectangle_Info {
    Po: Vector2;
    lines: Vector2[][];
};

function compute_rect_info(size: Vector2, ball_radius: number) {
    // Compute some stuff for the collision detector
    // The block's corners in block-space   
    let _2r = 2 * ball_radius;
    let w = size.x + _2r;
    let h = size.y + _2r;

    let P0: Vector2 = new_vector(-ball_radius, -ball_radius);
    let P1: Vector2 = add(P0, new_vector(0, h));
    let P2: Vector2 = add(P1, new_vector(w, 0));
    let P3: Vector2 = sub(P2, new_vector(0, h));
    
    
    // Line segments of the block (in block-space)
    let lines: Vector2[][] = [];
    lines = [
        [P0, P1],
        [P1, P2],
        [P2, P3],
        [P3, P0],
    ];

    let result: Rectangle_Info = {
        Po: {x: 0, y: 0},
        lines: lines
    };
    return result;
}

interface Collision_Info {
    occurred: boolean;
    N: Vector2;
    I: Vector2;
    R: Vector2;
    interpenetration: number;
    block_id: number;
};

function check_moving_circle_vs_static_rect(circle_P: Vector2, old_circle_P: Vector2, rect: Rectangle_Info): Collision_Info {
    let collision: Collision_Info = {} as Collision_Info;
    
    // Translate the circle into the rectangle's space
    circle_P = sub(circle_P, rect.Po);
    old_circle_P = sub(old_circle_P, rect.Po);
    
    //collision.I = noz(sub(old_circle_P, circle_P));
    let min_distance: number = 9999999999999;
    let I_dot_N: number = 0;

    // Did the circle collide with one of the lines of the rect?
    for (let line_index = 0; line_index < 4; ++line_index) {
        let current_line = rect.lines[line_index];
        let line_intersection: Intersection_Info = calculate_line_intersection(old_circle_P, circle_P, current_line[0], current_line[1]);
        if (line_intersection.exists) {
            let distance = magnitude(sub(line_intersection.P, old_circle_P));
            if (distance < min_distance) {
                min_distance = distance;
                collision.I = noz(sub(old_circle_P, line_intersection.P));
                collision.N = g_block_normals[line_index];                
                I_dot_N = dot(collision.I, collision.N);
                collision.interpenetration = magnitude(sub(circle_P, line_intersection.P)) + 1;                
            }
        }
    }

    if (min_distance < 9999999999999) {
        collision.occurred = true;
        let IN: Vector2 = smul(I_dot_N, collision.N);
        collision.R = sub(smul(2, IN), collision.I); // R = (2 * (I.N)N)) - I
    }
    
    return collision;
}




//
// Rendering
//

enum SpriteID {
    Ball = 0,
    Ball_Op,
    Paddle,
    Paddle_w_lasers,
    Block_1,
    Block_2,
    Block_3,
    Block_4,
    Block_5,
    Block_6,
    Powerup_1,
    Powerup_2,
    Powerup_3,
    Powerup_4,
    Powerup_5,
    Laser_Beam,
};

class Renderer {
    canvas    : HTMLCanvasElement;
    canvas_size: Vector2 = new_vector(0, 0);
    canvas_ctx: CanvasRenderingContext2D;
    background_patterns: CanvasPattern[] = [];

    images: HTMLImageElement[] = [];


    constructor() {
        let canvas = document.getElementById("canvas") as HTMLCanvasElement;
        if (canvas == null) throw new Error("Canvas is null!");

        let context = canvas.getContext("2d");
        if (context == null) throw new Error("Canvas context is null!");

        context.lineCap     = "round";
        context.lineJoin    = "round";
        context.strokeStyle = "black";
        context.lineWidth   = 1;
        
        //
        // Load resources
        // Backgrounds
        const background_image_names: string[] = [
            "data\\bitmaps\\background_1.png",
            "data\\bitmaps\\background_2.png",
            "data\\bitmaps\\background_3.png",
            "data\\bitmaps\\background_4.png",
        ];

        for (let index = 0; index < background_image_names.length; ++index) {
            let image = new Image();            
            image.src = background_image_names[index];
            image.onload = () => {
                let pattern = this.canvas_ctx.createPattern(image, "repeat");
                if (pattern)  this.background_patterns[index] = pattern;
            }
        }

        // Sprites
        const image_names = [
            "data\\bitmaps\\ball.png",
            "data\\bitmaps\\ball_op.png",
            "data\\bitmaps\\paddle.png",
            "data\\bitmaps\\paddle_w_lasers.png",
            "data\\bitmaps\\block_1.png",
            "data\\bitmaps\\block_2.png",
            "data\\bitmaps\\block_3.png",
            "data\\bitmaps\\block_4.png",
            "data\\bitmaps\\block_5.png",
            "data\\bitmaps\\block_6.png",
            "data\\bitmaps\\powerup_1.png",
            "data\\bitmaps\\powerup_2.png",
            "data\\bitmaps\\powerup_3.png",
            "data\\bitmaps\\powerup_4.png",
            "data\\bitmaps\\powerup_5.png",
            "data\\bitmaps\\powerup_4.png", // LASER
        ];        

        for (let index = 0; index < image_names.length; ++index) {
            let image = new Image();
            image.src = image_names[index];
            this.images[index] = image;
        }


        this.canvas = canvas;        
        this.canvas_ctx = context;
        this.resize();
    }


    public resize() {
        let canvas: HTMLCanvasElement = this.canvas;
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        this.canvas_size = new_vector(this.canvas.width, this.canvas.height);
    }
    

    //
    // Draw calls
    public clear_canvas() {
        this.canvas_ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


    public draw_background(index: number = 0) {
        index = index < this.background_patterns.length ? index : 0;
        let pattern: CanvasPattern = this.background_patterns[index];
        if (pattern) {
            let ctx = this.canvas_ctx;
            ctx.beginPath();
            ctx.fillStyle = pattern;
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);            
        }
    }


    public draw_line(P0: Vector2, P1: Vector2, colour: string) {
        let ctx = this.canvas_ctx;
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.moveTo(P0.x, P0.y);
        ctx.lineTo(P1.x, P1.y);
        ctx.stroke();
    }


    public draw_image(resource_id: SpriteID, P: Vector2, size: Vector2) {
        this.canvas_ctx.drawImage(this.images[resource_id], P.x, P.y, size.x, size.y);
    }


    public draw_text(P: Vector2, size: number, text: string) {
        this.canvas_ctx.font = size + "px Verdana";
        this.canvas_ctx.textAlign = "center";
        this.canvas_ctx.fillText(text, P.x, P.y);        
    }
}




//
// Audio
//

enum SoundID {
    Paddle_1 = 0,
    Paddle_2,
    Paddle_3,
    Block,
    Block_5,
    Laser,
    Lost_Ball,
    Powerup_1,
    Powerup_2,
    Powerup_3,
    Powerup_4,
};

class Sound {
    data: HTMLAudioElement[] = [];

    constructor() {
        const sound_names = [
            "data\\audio\\paddle_1.wav",
            "data\\audio\\paddle_2.wav",
            "data\\audio\\paddle_3.wav",
            "data\\audio\\block.wav",
            "data\\audio\\block_5.wav",
            "data\\audio\\laser.wav",
            "data\\audio\\lost_ball.wav",
            "data\\audio\\powerup_1.wav",
            "data\\audio\\powerup_2.wav",
            "data\\audio\\powerup_3.wav",
            "data\\audio\\powerup_4.wav",
        ];

        for (let index = 0; index < sound_names.length; ++index) {
            let s = new Audio(sound_names[index]);
            this.data.push(s);
        }
    }


    play(sound_id: number) {
        sound_id = sound_id >= this.data.length ? this.data.length - 1 : sound_id;
        //this.data[sound_id].play();
    }
};




// 
// Ball
//

class Ball {
    renderer: Renderer;
    sound: Sound;

    radius: number = 1;
    size: Vector2 = new_vector(0, 0);
    half_size: Vector2 = new_vector(0, 0);
    
    start_speed: number = 0.35;
    max_speed: number = 2;
    speed_increase_factor: number = 1.025;
    
    P: Vector2    = new_vector(0, 0);
    oldP: Vector2 = new_vector(0, 0);
    dP: Vector2   = new_vector(0, 0); // fraction of dp_scale (i.e. the actual velocity is dP * dp_scale).
    dp_scale: number = 1;

    is_op_remaining_time = 0;


    constructor(renderer: Renderer, sound: Sound) {
        this.renderer = renderer;
        this.sound = sound;

        this.dp_scale = renderer.canvas.height;
    }


    public resize(block_size: Vector2) {
        this.radius = 0.3 * block_size.y;
        this.size = new_vector(2 * this.radius, 2 * this.radius);
        this.half_size = smul(0.5, this.size);
        this.dp_scale = this.renderer.canvas.height;
    }


    public reset() {
        this.P = new_vector(0, 0);
        this.oldP = this.P;
        this.dP = new_vector(0, 0);
        this.is_op_remaining_time = 0;
    }


    public collided_with_wall() {
        let P: Vector2 = this.P;
        let radius: number = this.radius;
        let max_x: number = this.renderer.canvas.width;

        let left = (P.x - radius) <= 0;
        let right = (P.x + radius) >= max_x;
        let top = (P.y - radius) <= 0;

        if (left) {
            this.P.x = this.radius + 1;
            this.oldP = this.P;
            this.dP.x *= -1;
        }
        else if (right) {
            this.P.x = max_x - this.radius - 1;
            this.oldP = this.P;
            this.dP.x *= -1;
        }
        else if (top) {
            this.P.y = this.radius + 1;
            this.dP.y *= -1;      
        }
    }


    public update(dt: number) {
        this.oldP = this.P;
        let speed = magnitude(this.dP);
        if (speed > this.max_speed) {
            let dP = noz(this.dP);
            this.dP = smul(this.max_speed, dP);
        }

        this.P = add(this.P, smul(dt, smul(this.dp_scale, this.dP)));

        if (this.is_op_remaining_time > 0) {
            this.is_op_remaining_time -= dt;
        }
    }


    public render() {
        let op = this.is_op_remaining_time > 0 ? 1 : 0;
        this.renderer.draw_image(SpriteID.Ball + op, sub(this.P, this.half_size), this.size);
    }
};




//
// Player
//

class Player {
    renderer: Renderer;
    sound: Sound;

    P: Vector2 = new_vector(0, 0);    
    move_target_x: number = 0;
    original_size: Vector2 = new_vector(10, 10);    
    current_size: Vector2 = new_vector(10, 10);
    
    lives: number = 3;
    score: number = 0;

    wide_remaining_time = 0;
    lasers_remaining_time = 0;

    laser_beams: Vector2[] = [];
    laser_beam_size: Vector2;


    constructor(renderer: Renderer, sound: Sound) {
        this.renderer = renderer;
        this.sound = sound;

        this.P = new_vector(0.5 * renderer.canvas.width, 0.5 * renderer.canvas.height);
        this.move_target_x = this.P.x;

        this.laser_beam_size = new_vector(10, 10);
    }


    public resize(block_size: Vector2) {
        this.original_size = mul(new_vector(1.2, 0.6), block_size);
        let wide_factor = this.wide_remaining_time > 0 ? 2 : 1;
        this.current_size = mul(new_vector(wide_factor, 1), this.original_size);
        let s = 0.7 * block_size.y;
        this.laser_beam_size = new_vector(0.5 * s, s);
    }    


    public reset() {        
        this.remove_wide();
        this.remove_lasers();
    }


    public place_ball_on_paddle(ball: Ball) {
        let P = this.P;
        let half_size = smul(0.5, this.current_size);

        ball.P  = new_vector(P.x, P.y - half_size.y - ball.radius - 1);
        ball.dP = new_vector(0, 0);
        ball.oldP = ball.P;
    }
    

    public serve_ball(ball: Ball) {
        let S: Vector2 = noz(new_vector(-0.0025 * (this.P.x - this.move_target_x), -1));
        ball.dP = smul(ball.start_speed, S);
    }


    public make_wide() {
        this.wide_remaining_time = g_powerup_duration[Powerup_Type.Wide_Paddle];
        let size = this.original_size;
        this.current_size = new_vector(2 * size.x, size.y);
    }


    public remove_wide() {
        this.wide_remaining_time = 0;
        this.current_size = this.original_size;
    }


    public add_lasers() {
        this.lasers_remaining_time = 10;
    }


    public remove_lasers() {
        this.lasers_remaining_time = 0;
        this.laser_beams = [];
    }


    public fire_lasers() {
        if (this.lasers_remaining_time > 0) {
            let player_size = this.current_size;
            let beam_size = this.laser_beam_size;
            let y = 0.5 * player_size.y + beam_size.y;
            let x = 0.5 * beam_size.x;

            let P = new_vector(this.P.x - x, this.P.y - y);
            this.laser_beams.push(P);
        }
    }


    public update(dt: DOMHighResTimeStamp) {
        let size = this.current_size;        
        let half_width: number = 0.5 * size.x;    
        
        //
        // Position
        this.P.x += 0.1 * (this.move_target_x - this.P.x);
        this.P.x = Math.max(half_width, Math.min(this.renderer.canvas.width - half_width, this.P.x));
        

        //
        // Wide
        if (this.wide_remaining_time > 0) {
            this.wide_remaining_time -= dt;
            if (this.wide_remaining_time <= 0) {
                this.remove_wide();                
            }
        }


        //
        // Laser beams
        if (this.lasers_remaining_time > 0) {
            this.lasers_remaining_time -= dt;
            if (this.lasers_remaining_time <= 0) {
                this.remove_lasers();
            }
        }

        let laser_beams = this.laser_beams;
        let beam_P;
        for (let index = 0; index < laser_beams.length; ++index) {
            beam_P = laser_beams[index];
            beam_P.y -= dt * 500;

            if ((beam_P.y + this.laser_beam_size.y) <= 0) {
                laser_beams.splice(index, 1);
            }
        }
    }


    public render() {        
        let renderer = this.renderer;
        let size = this.current_size;
        let half_size = smul(0.5, size);

        //
        // Paddle
        let lasers = this.lasers_remaining_time > 0 ? 1 : 0;
        renderer.draw_image(SpriteID.Paddle + lasers, sub(this.P, half_size), size);


        //
        // Laser beams
        for (let beam_P of this.laser_beams) {
            let size = this.laser_beam_size;
            let half_size = new_vector(0.5 * size.x, 0);
            let P = sub(beam_P, half_size);
            this.renderer.draw_image(SpriteID.Laser_Beam, P, size);
        }


        //
        // Render lives
        const x_margin: number = 15;
        const y = renderer.canvas.height - size.y;
        const x_factor = 0.4 * size.x;
        if ((this.lives - 1) > 0) {
            let P = new_vector(x_margin, y);
            size = smul(0.25, size);
            for (let index = 0; index < (this.lives - 1); ++index) {
                renderer.draw_image(SpriteID.Paddle, P, size);
                P.x += x_factor;
            }
        }


        //
        // Print score
        renderer.canvas_ctx.font = "14px Verdana";
        renderer.canvas_ctx.fillStyle = "white";
        renderer.canvas_ctx.textAlign = "right";
        renderer.canvas_ctx.textBaseline = "middle";
        renderer.canvas_ctx.fillText("Score: " + this.score, this.renderer.canvas.width - x_margin, y);
    }
};




//
// Block
//

enum Powerup_Type {
    Wide_Paddle = 0,
    Lasers,    
    Ball_Is_Op,
    //Multiple_Balls,
    //Last,
};

interface Powerup {
    P: Vector2;
    type: Powerup_Type;
    remaining_time: number;
};


class Game_Objects {
    renderer: Renderer;
    sound: Sound;

    screen_offset: Vector2 = new_vector(0, 0);

    block_data: number[] = [];
    block_size: Vector2 = new_vector(0, 0);
    readonly column_count: number = 13;
    readonly row_count: number    = 15;
    blocks_remaining: number = 0;

    dropping_powerups: Powerup[] = [];
    powerup_size: Vector2 = new_vector(0, 0);    


    constructor(renderer: Renderer, sound: Sound) {
        this.renderer = renderer;
        this.sound = sound;

        this.resize();
    }


    public resize() {
        const aspect_ratio = 2;
        let canvas_width: number = this.renderer.canvas.width;
        let canvas_height: number = this.renderer.canvas.height;
        let y_margin_top: number = 3;
        let y_margin_bottom: number = 2;
        let y_margin_total: number = y_margin_top + y_margin_bottom;

        //this.block_width = Math.floor(canvas_width / this.block_column_count);
        let w = canvas_width / this.column_count;
        let h = Math.floor(w / aspect_ratio);
        if (((this.row_count + y_margin_total) * h) > canvas_height) {
            h = Math.floor(canvas_height / (this.row_count + y_margin_total));
        }

        this.block_size = new_vector(w, h);
        this.powerup_size = new_vector(0.5 * this.block_size.x, 0.5 * this.block_size.x);

        //Math.ceil(0.5 * (width - (this.block_column_count * this.block_width)));
        this.screen_offset = new_vector(0, y_margin_top * this.block_size.y);
    }


    public reset() {
        this.dropping_powerups = [];        
    }


    public init_level(level_data: number[]) {
        this.reset();
        this.blocks_remaining = 0;
        this.block_data = [];

        let size = this.row_count * this.column_count;
        let level_data_size = level_data.length;

        for (let index: number = 0; index < size; ++index) {
            if (index < level_data_size) {
                let block_id = level_data[index];
                if (block_id == 6)  block_id = 8;
                this.block_data.push(block_id);
                if (block_id > 0)  ++this.blocks_remaining;
            }
            else {
                this.block_data.push(0);
                console.log("Error: index (" + index + ") was larger than level_data (" + level_data.length + ").");
            }
        }
    }


    public add_powerup(block_id: number, P: Vector2) {
        if (block_id >= 0 && block_id < (g_block_powerup_probs.length - 1)) {
            let block_powerup = g_block_powerup_probs[block_id];
            let rand = Math.random();           

            if (rand <= block_powerup.prob) {
                let powerup = {} as Powerup;
                rand = Math.random()
                powerup.type = 0;

                for (let powerup_index = 0; powerup_index < block_powerup.allowed_powerups.length; ++powerup_index) {
                    let prob = block_powerup.allowed_powerups_prob[powerup_index];
                    if (rand <= prob) {
                        powerup.type = powerup_index;
                        break;
                    }
                }
                
                let size = this.powerup_size;
                let half_size = smul(0.5, size);
                P = sub(P, half_size);
                P.x = Math.max(0, Math.min(this.renderer.canvas.width - size.x, P.x));
                powerup.P = P;

                this.dropping_powerups.push(powerup);                
            }
        }
    }

    
    public update(dt: DOMHighResTimeStamp, player: Player): Powerup[] {
        //
        // Powerups
        let picked_up_powerups: Powerup[] = [];
        let dropping_powerups = this.dropping_powerups;

        const powerup_half_size = smul(0.5, this.powerup_size);
        let player_size = player.current_size;
        let player_half_size = smul(0.5, player_size);

        let s = add(player_half_size, powerup_half_size);
        const player_min = sub(player.P, s);
        const player_max = add(player.P, s);

        const Ag = new_vector(0, 100);

        for (let index = 0; index < dropping_powerups.length; ++index) {
            let powerup = dropping_powerups[index];
            powerup.P = add(powerup.P, smul(dt, Ag));
            powerup.remaining_time = 10;

            if (powerup.P.y > this.renderer.canvas.height) {
                dropping_powerups.splice(index, 1);
            }            
            else {
                let powerup_mid = add(powerup.P, powerup_half_size);                

                if ((powerup_mid.x >= player_min.x) && (powerup_mid.x <= player_max.x) && 
                    (powerup_mid.y >= player_min.y) && (powerup_mid.y <= player_max.y)) 
                {
                    picked_up_powerups.push(powerup);
                    player.score += g_powerup_value[powerup.type];
                    dropping_powerups.splice(index, 1);
                }
            }
        }        

        return picked_up_powerups;
    }


    public render() {
        let renderer = this.renderer;
        let block_size = this.block_size;

        let col_count = this.column_count;
        let row_count = this.row_count;
        let offset = this.screen_offset;
        let P: Vector2;

        for (let y = 0; y < row_count; ++y) {
            for (let x = 0; x < col_count; ++x) {
                let index: number = (this.column_count * y) + x;
                let block_id: number = this.block_data[index];
                if (block_id > 0) {
                    block_id -= 1;
                    block_id = Math.max(0, Math.min(5, block_id)); // TODO: remove hard-coded 5 (number of blocks)
                    P = new_vector(x, y);
                    P = mul(P, block_size);
                    P = add(P, offset);
                    renderer.draw_image(SpriteID.Block_1 + block_id, P, block_size);
                }
            }
        }

        // Powerups
        for (let powerup of this.dropping_powerups) {
            this.renderer.draw_image(SpriteID.Powerup_1 + powerup.type, powerup.P, this.powerup_size);
        }
    }
};




//
// Game
//

enum Game_Mode {
    Idle,
    Serving,
    Playing,
    Dead,
    Game_Over,
    Won_Level,
    Won_Game,
};

class Game {
    renderer: Renderer;
    sound: Sound;

    is_running: boolean;
    last_update: DOMHighResTimeStamp = 0;
    
    player: Player;
    ball: Ball;
    game_objects: Game_Objects;
    
    curr_level_index: number = 0;
    curr_mode: Game_Mode = Game_Mode.Serving;



    //
    // Init
    constructor() {        
        this.renderer = new Renderer();        
        let renderer: Renderer = this.renderer;

        this.sound = new Sound();
        let sound = this.sound;

        this.game_objects = new Game_Objects(renderer, sound);        
        this.game_objects.init_level(g_levels_data[this.curr_level_index]);

        this.player = new Player(renderer, sound);
        this.ball = new Ball(renderer, sound);
        
        this.resize();
        this.is_running = true;

        // Event handling
        let canvas = renderer.canvas;
        canvas.addEventListener("mousedown" , this.press_event_handler);
        canvas.addEventListener("touchstart", this.press_event_handler);
        canvas.addEventListener("mousemove" , this.move_event_handler);
        canvas.addEventListener("touchmove" , this.move_event_handler);

        window.addEventListener("resize", this.resize, false);
        
        window.requestAnimationFrame(this.update_and_render);
    }


    //
    // Resize
    private resize = () => {
        let ball: Ball = this.ball;
        let renderer = this.renderer;
        let game_objects = this.game_objects;
        let player: Player = this.player;
        let block_size = game_objects.block_size;
        let player_size = player.current_size;

        // Resize everything
        renderer.resize();
        game_objects.resize();
        ball.resize(block_size);
        player.resize(block_size);
        
        // Move the player if neccessary
        let canvas_width  = renderer.canvas.width;
        let canvas_height = renderer.canvas.height;
        player.P.y = canvas_height - 4 * player_size.y;


        // Move the ball
        // TODO: this makes it possible to cheat, fix this (or do we allow it for the laughs?)        
        if ((ball.P.y + ball.radius) > (player.P.y - player_size.y)) {
            ball.P.y = player.P.y - 3 * player_size.y;
        }
        
        if ((ball.P.x + ball.radius) > canvas_width) {
            ball.P.x = canvas_width - 3 * ball.radius;
        }
    }   


    //    
    // Input
    //private press_event_handler = (e: MouseEvent | TouchEvent) => {
    private press_event_handler = () => {
        let curr_mode = this.curr_mode;
        let player = this.player;

        switch (curr_mode) {
            case Game_Mode.Playing: {
                player.fire_lasers();
            } break;

            case Game_Mode.Serving: {
                player.serve_ball(this.ball);
                curr_mode = Game_Mode.Playing;
            } break;

            case Game_Mode.Dead: {
                if (--player.lives <= 0) {
                    curr_mode = Game_Mode.Game_Over;
                }
                else {
                    curr_mode = Game_Mode.Serving;
                }
            } break;

            case Game_Mode.Game_Over: {
                player.lives = 3;
                player.score = 0;
                this.curr_level_index = 0;
                this.game_objects.init_level(g_levels_data[0]);
                curr_mode = Game_Mode.Serving;
            } break;

            case Game_Mode.Won_Level: {
                player.reset();
                this.curr_level_index = (this.curr_level_index + 1) % g_levels_data.length;
                this.game_objects.init_level(g_levels_data[this.curr_level_index]);
                curr_mode = Game_Mode.Serving;                
            } break;


            case Game_Mode.Won_Game: {
                player.reset();
                player.lives = 3;
                this.curr_level_index = 0;
                this.game_objects.init_level(g_levels_data[0]);
                curr_mode = Game_Mode.Serving;
            } break;
        }

        this.curr_mode = curr_mode;
    }


    private move_event_handler = (e: MouseEvent | TouchEvent) => {
        let mouse_x = (e as TouchEvent).changedTouches ? (e as TouchEvent).changedTouches[0].pageX : (e as MouseEvent).pageX;
        //let mouse_y = (e as TouchEvent).changedTouches ? (e as TouchEvent).changedTouches[0].pageY : (e as MouseEvent).pageY;
        mouse_x -= this.renderer.canvas.offsetLeft;
        //mouse_y -= this.canvas.offsetTop;
        this.player.move_target_x = mouse_x;

        e.preventDefault();
    }


    //
    // Collision detection and response
    private handle_collisions() {
       let collision: Collision_Info = {} as Collision_Info;
       let ball = this.ball;
       let game_objects = this.game_objects;
       let player = this.player;

       //
       // Ball vs Blocks
        {
            const column_count  = game_objects.column_count;
            const row_count     = game_objects.row_count;
            const screen_offset = game_objects.screen_offset;
            const block_size    = game_objects.block_size;
            let block_data      = game_objects.block_data;
            let rect_info = compute_rect_info(block_size, ball.radius);
            let P;
            let ball_is_op = ball.is_op_remaining_time > 0;
            
            let beam_P;
            let laser_beams = player.laser_beams;
            let laser_hit = false;            
            let beam_size = this.game_objects.powerup_size;
            let half_beam_size = smul(0.5, beam_size);


            // Check all the blocks
            for (let y = 0; y < row_count; ++y) {
                for (let x = 0; x < column_count; ++x) {
                    let block_index = (column_count * y) + x;
                    let block_id = block_data[block_index];
                    if (block_id > 0) {
                        P = new_vector(x, y);
                        P = mul(P, block_size);
                        P = add(P, screen_offset);
                        rect_info.Po = P;                        
                        collision = check_moving_circle_vs_static_rect(ball.P, ball.oldP, rect_info);
                        
                        // Check lasers
                        if (!collision.occurred) {
                            for (let laser_index = 0; laser_index < laser_beams.length; ++laser_index) {
                                beam_P = laser_beams[laser_index];
                                if (((beam_P.x + half_beam_size.x) >= P.x) && ((beam_P.x - half_beam_size.x) <= (P.x + beam_size.x)) && 
                                    (beam_P.y <= (P.y + beam_size.y))) 
                                {
                                    laser_hit = true;
                                    laser_beams.splice(laser_index, 1);                                    
                                }
                            }
                        }

                        if (collision.occurred || laser_hit) {                            
                            if (block_id < 7 || ball_is_op) {
                                block_data[block_index] = 0;
                                --game_objects.blocks_remaining;
                                this.sound.play(SoundID.Block);
                            }
                            else {
                                block_data[block_index] = block_id - 1;
                                this.sound.play(SoundID.Block_5);
                            }

                            if (block_id > 0 && block_id < 6) {
                                player.score += g_block_values[block_id];
                                let block_mid_P = add(P, smul(0.5, block_size));

                                if (ball.is_op_remaining_time <= 0) {
                                    game_objects.add_powerup(block_id, block_mid_P);
                                }
                            }
                 
                            if (!ball_is_op && !laser_hit) {
                                ball.P = add(ball.P, smul(collision.interpenetration + 1, collision.I));
                                
                                let speed = magnitude(ball.dP);
                                ball.dP = smul(speed, collision.R);
                            }

                            laser_hit = false;
                        }
                    }
                }
            }
        }

    
        //
        // Ball vs player
        {
            let player_size = player.current_size;
            let rect_info = compute_rect_info(player_size, ball.radius);
            rect_info.Po = sub(player.P, smul(0.5, player_size));
            collision = check_moving_circle_vs_static_rect(ball.P, ball.oldP, rect_info);
            if (collision.occurred) {
                ball.P = add(ball.P, smul(collision.interpenetration + 1, collision.N));

                let sign: number = collision.R.y >= 0 ? 1 : -1;
                let factor = 250 * sign;
                let dx: number = player.move_target_x - player.P.x;                                    
                let N: Vector2 = noz(new_vector(dx, factor));
                
                let f: number = (ball.P.x - (player.P.x - 0.5 * player_size.x)) / player_size.x;
                if ((f >= 0.0 && f < 0.2)) {                        
                    N = noz(new_vector(-2, sign));
                    this.sound.play(SoundID.Paddle_2);
                }
                else if ((f >= 0.8 && f <= 1)) {                        
                    N = noz(new_vector(2, sign));
                    this.sound.play(SoundID.Paddle_2);
                }
                else {
                    this.sound.play(SoundID.Paddle_1);
                }

                let speed = ball.speed_increase_factor * magnitude(ball.dP);
                ball.dP = smul(speed, noz(N));
            }
        }

        
        //
        // Ball vs walls
        ball.collided_with_wall();
    };



    //
    // Update game logic, render everything
    update_and_render = (t: DOMHighResTimeStamp) => {
        if (this.is_running) {
            let renderer = this.renderer;
            let player = this.player;
            let ball = this.ball;
            let game_objects = this.game_objects;
        

            //
            // Update
            let dt: number = this.last_update == 0 ? 1.0 / 60.0 : t - this.last_update;

            let curr_mode = this.curr_mode;            
            if (curr_mode > Game_Mode.Idle) {
                player.update(dt);

                if (curr_mode == Game_Mode.Serving) {
                    player.place_ball_on_paddle(ball);
                }
                else if (curr_mode == Game_Mode.Playing) {
                    //
                    // Update                    
                    if (game_objects.blocks_remaining > 0) {
                        ball.update(dt);
                        let picked_up_powerups = game_objects.update(dt, player);
                        for (let powerup of picked_up_powerups) {
                            switch (powerup.type) {                     
                                //case Powerup_Type.Last: {} break;
                                //case Powerup_Type.Multiple_Balls: {} break;
                                
                                case Powerup_Type.Lasers: {
                                    player.lasers_remaining_time = g_powerup_duration[Powerup_Type.Lasers];
                                } break;

                                case Powerup_Type.Ball_Is_Op: {
                                    ball.is_op_remaining_time = g_powerup_duration[Powerup_Type.Ball_Is_Op];
                                } break;

                                case Powerup_Type.Wide_Paddle: {
                                    player.make_wide();
                                } break;
                            }
                        }

                        let dead = (ball.P.y - ball.radius > renderer.canvas.height);
                        if (dead) {
                            curr_mode = Game_Mode.Dead;
                            this.sound.play(SoundID.Lost_Ball);
                            
                            player.reset();
                            game_objects.reset();
                            ball.reset();                                                
                        }
                        else {
                            this.handle_collisions();                            
                        }
                    }
                    else {
                        // No more blocks, next level!
                        curr_mode = Game_Mode.Won_Level;
                    }
                }
            }

            this.curr_mode = curr_mode;


            //
            // Render
            renderer.clear_canvas();
            renderer.draw_background(g_levels_backgrounds[this.curr_level_index]);
            game_objects.render();
            player.render();
            ball.render();

            if (curr_mode == Game_Mode.Dead) {
                let P = smul(0.5, renderer.canvas_size);
                renderer.draw_text(P, 30, "Oh noes!");
                P.y += 50;
                renderer.draw_text(P, 20, "You've lost a life");
            }
            else if (curr_mode == Game_Mode.Game_Over) {
                let P = smul(0.5, renderer.canvas_size);
                renderer.draw_text(P, 40, "Game Over!");
                P.y += 50;
                renderer.draw_text(P, 20, "You've lost, try again");
            }
            else if (curr_mode == Game_Mode.Won_Level) {
                let P = smul(0.5, renderer.canvas_size);
                renderer.draw_text(P, 40, "Victory!");
                P.y += 50;
                renderer.draw_text(P, 20, "Onwards to the next level");
            }
            else if (curr_mode == Game_Mode.Won_Game) {
                let P = smul(0.5, renderer.canvas_size);
                renderer.draw_text(P, 40, "Congratulations!");
                P.y += 50;
                renderer.draw_text(P, 20, "You have beaten the game");
            }

            // Requst new frame
            window.requestAnimationFrame(this.update_and_render);
        }
    }
}

let game: Game = new Game();
window.requestAnimationFrame(game.update_and_render);