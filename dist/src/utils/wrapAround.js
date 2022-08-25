"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapAround = (value, [min, max]) => {
    const range = max - min;
    while (value >= max)
        value -= range;
    while (value < min)
        value += range;
    return value;
};
exports.default = wrapAround;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcEFyb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy93cmFwQXJvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFhLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFtQixFQUFVLEVBQUU7SUFDekUsTUFBTSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQTtJQUN2QixPQUFPLEtBQUssSUFBSSxHQUFHO1FBQUUsS0FBSyxJQUFJLEtBQUssQ0FBQTtJQUNuQyxPQUFPLEtBQUssR0FBRyxHQUFHO1FBQUUsS0FBSyxJQUFJLEtBQUssQ0FBQTtJQUNsQyxPQUFPLEtBQUssQ0FBQTtBQUNkLENBQUMsQ0FBQTtBQUVELGtCQUFlLFVBQVUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdyYXBBcm91bmQgPSAodmFsdWU6IG51bWJlciwgW21pbiwgbWF4XTogW251bWJlciwgbnVtYmVyXSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IHJhbmdlID0gbWF4IC0gbWluXG4gIHdoaWxlICh2YWx1ZSA+PSBtYXgpIHZhbHVlIC09IHJhbmdlXG4gIHdoaWxlICh2YWx1ZSA8IG1pbikgdmFsdWUgKz0gcmFuZ2VcbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBBcm91bmRcbiJdfQ==