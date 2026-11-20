var largestRectangleArea = function(heights) {
    let maxarea=0;
    const stack=[];
    for(let i=0; i<=heights.length; i++){
        let h=(i===heights.length)?0:heights[i];
        while(heights.length>0 && h<heights[stack[stack.length-1]]){
        let height= heights[stack.pop()];
        let width=stack.length===0?i:i-stack[stack.length-1]-1;
        let area=height*width;
        maxarea=Math.max(maxarea,area);
    }
    stack.push(i);
    }
    return maxarea;
};