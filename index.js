// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun("bathe my dog"));

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
};
console.log(mondayWork('work from home'));


function wrapAdjective(flair){
    return function(adjective){
        return `You are ${flair}${adjective}${flair}!`;
    };
}
const wrapWithStars = wrapAdjective('*');
console.log(wrapWithStars('amazing'));

const wrapWithL1s = wrapAdjective('||');
console.log(wrapWithL1s('wonderful'));

