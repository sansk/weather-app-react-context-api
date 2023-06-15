const directions = [
    'North',
    'North-East',
    'East',
    'South-East',
    'South',
    'South-West',
    'West',
    'North-West'
];

/*-----------------------------------------------
 Get wind direction from the degree 
------------------------------------------------*/
export const getDirection = (angle) => {
    return directions[Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8];
};