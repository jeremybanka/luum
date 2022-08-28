"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const channelsToHex = (channels) => `#${Object.values(channels)
    .map((channel) => {
    let channelHex = channel.toString(16);
    if (channelHex.length === 1)
        channelHex = 0 + channelHex;
    return channelHex;
})
    .join(``)}`;
exports.default = channelsToHex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbHNUb0hleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHBvcnQvY2hhbm5lbHNUb0hleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQU0sYUFBYSxHQUFHLENBQUMsUUFBdUIsRUFBTyxFQUFFLENBQ3JELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7S0FDeEIsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7SUFDZixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3JDLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsVUFBVSxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUE7SUFDeEQsT0FBTyxVQUFVLENBQUE7QUFDbkIsQ0FBQyxDQUFDO0tBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUE7QUFFZixrQkFBZSxhQUFhLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENoYW5uZWxPYmplY3QsIEhleCB9IGZyb20gXCJ+XCJcblxuY29uc3QgY2hhbm5lbHNUb0hleCA9IChjaGFubmVsczogQ2hhbm5lbE9iamVjdCk6IEhleCA9PlxuICBgIyR7T2JqZWN0LnZhbHVlcyhjaGFubmVscylcbiAgICAubWFwKChjaGFubmVsKSA9PiB7XG4gICAgICBsZXQgY2hhbm5lbEhleCA9IGNoYW5uZWwudG9TdHJpbmcoMTYpXG4gICAgICBpZiAoY2hhbm5lbEhleC5sZW5ndGggPT09IDEpIGNoYW5uZWxIZXggPSAwICsgY2hhbm5lbEhleFxuICAgICAgcmV0dXJuIGNoYW5uZWxIZXhcbiAgICB9KVxuICAgIC5qb2luKGBgKX1gXG5cbmV4cG9ydCBkZWZhdWx0IGNoYW5uZWxzVG9IZXhcbiJdfQ==