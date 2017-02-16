/**
 * @description Just a simple grid game
 * @author Steven O'Riley
 */

/*
    0 = black
    1 = white
    2 = gray
*/

/*
    0 = forward
    1 = right
    2 = bottom
    3 = south
*/

var grid = [
    0, 0, 0, 0, 2,
    0, 0, 0, 0, 1,
    1, 1, 1, 1, 1,
    1, 0, 0, 0, 0,
    1, 0, 0, 0, 0
];

var column_width = 3;
var player_position_x = 0,
    player_position_y = 4,
    player_direction = 0;

function move_forward() {
    if (player_direction == 0 && can_move_forward())
        player_position_y -= 1;
    else if (player_direction == 1 && can_move_static_right())
        player_position_x += 1;
    else if (player_direction == 2 && can_move_static_down())
        player_position_y += 1;
    else if (player_direction == 3 && can_move_static_left())
        player_position_x -= 1;

    return get(player_position_x, player_position_y) == 2;
}

function can_move(direction) {
    return (direction == 0 ? can_move_static_forward() :
        direction == 1 ? can_move_static_right() :
        direction == 2 ? can_move_static_down() :
        direction == 3 ? can_move_static_left() :
        (function() { throw "Invalid direction" })());
}

function can_move_forward() {
    return can_move(player_direction);
}

function can_move_right() {
    return can_move((player_direction + 1) % 4);
}

function can_move_down() {
    return can_move((player_direction + 2) % 4);
}

function can_move_left() {
    return can_move((player_direction + 3) % 4);
}

function can_move_static_right() {
    return (player_position_x == column_width ? 0 : get(player_position_x + 1, player_position_y)) != 0;
}

function can_move_static_left() {
    return (player_position_x == 0 ? 0 : get(player_position_x - 1, player_position_y)) != 0;
}

function can_move_static_forward() {
    return (get(player_position_x, player_position_y - 1) || 0) != 0;
}

function can_move_static_down() {
    return (get(player_position_x, player_position_y - 1) || 0) != 0;
}

function rotate_right() {
    player_direction = (player_direction + 1) % 4;
}

function rotate_left() {
    player_direct = player_direction - 1 + 4;
}

function get(x, y) {
    return grid[x + y * column_width] || 0;
}

function set(x, y, value) {
    grid[x + y * column_width] = value;
}