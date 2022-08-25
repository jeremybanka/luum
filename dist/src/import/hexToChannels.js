"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const normalizeHex_1 = __importDefault(require("./normalizeHex"));
exports.default = (maybeHex) => {
    const hex = (0, normalizeHex_1.default)(maybeHex);
    const getHexcodeChannel = (nameOfChannel) => {
        switch (nameOfChannel) {
            /* eslint-disable prettier/prettier */
            case `r`: return hex.slice(0, 2);
            case `g`: return hex.slice(2, 4);
            case `b`: return hex.slice(4, 6);
            default: throw new Error(`strange channel name`);
            /* eslint-enable prettier/prettier */
        }
    };
    const rBase10 = parseInt(getHexcodeChannel(`r`), 16);
    const gBase10 = parseInt(getHexcodeChannel(`g`), 16);
    const bBase10 = parseInt(getHexcodeChannel(`b`), 16);
    return {
        R: rBase10,
        G: gBase10,
        B: bBase10,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV4VG9DaGFubmVscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbXBvcnQvaGV4VG9DaGFubmVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLGtFQUF5QztBQUV6QyxrQkFBZSxDQUFDLFFBQWdCLEVBQWlCLEVBQUU7SUFDakQsTUFBTSxHQUFHLEdBQUcsSUFBQSxzQkFBWSxFQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2xDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxhQUE4QixFQUFFLEVBQUU7UUFDM0QsUUFBUSxhQUFhLEVBQUU7WUFDckIsc0NBQXNDO1lBQ3RDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUNoQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDaEMsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ2hDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtZQUNoRCxxQ0FBcUM7U0FDdEM7SUFDSCxDQUFDLENBQUE7SUFDRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDcEQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ3BELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUVwRCxPQUFPO1FBQ0wsQ0FBQyxFQUFFLE9BQU87UUFDVixDQUFDLEVBQUUsT0FBTztRQUNWLENBQUMsRUFBRSxPQUFPO0tBQ1gsQ0FBQTtBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ2hhbm5lbE9iamVjdCB9IGZyb20gXCJ+XCJcblxuaW1wb3J0IG5vcm1hbGl6ZUhleCBmcm9tIFwiLi9ub3JtYWxpemVIZXhcIlxuXG5leHBvcnQgZGVmYXVsdCAobWF5YmVIZXg6IHN0cmluZyk6IENoYW5uZWxPYmplY3QgPT4ge1xuICBjb25zdCBoZXggPSBub3JtYWxpemVIZXgobWF5YmVIZXgpXG4gIGNvbnN0IGdldEhleGNvZGVDaGFubmVsID0gKG5hbWVPZkNoYW5uZWw6IGBiYCB8IGBnYCB8IGByYCkgPT4ge1xuICAgIHN3aXRjaCAobmFtZU9mQ2hhbm5lbCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cbiAgICAgIGNhc2UgYHJgOiByZXR1cm4gaGV4LnNsaWNlKDAsIDIpXG4gICAgICBjYXNlIGBnYDogcmV0dXJuIGhleC5zbGljZSgyLCA0KVxuICAgICAgY2FzZSBgYmA6IHJldHVybiBoZXguc2xpY2UoNCwgNilcbiAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihgc3RyYW5nZSBjaGFubmVsIG5hbWVgKVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuICAgIH1cbiAgfVxuICBjb25zdCByQmFzZTEwID0gcGFyc2VJbnQoZ2V0SGV4Y29kZUNoYW5uZWwoYHJgKSwgMTYpXG4gIGNvbnN0IGdCYXNlMTAgPSBwYXJzZUludChnZXRIZXhjb2RlQ2hhbm5lbChgZ2ApLCAxNilcbiAgY29uc3QgYkJhc2UxMCA9IHBhcnNlSW50KGdldEhleGNvZGVDaGFubmVsKGBiYCksIDE2KVxuXG4gIHJldHVybiB7XG4gICAgUjogckJhc2UxMCxcbiAgICBHOiBnQmFzZTEwLFxuICAgIEI6IGJCYXNlMTAsXG4gIH1cbn1cbiJdfQ==