"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interpolate = ({ completionRatio = 0.5, range: [to, from], }) => {
    const value = from + completionRatio * (to - from);
    /*
    console.log('||| to', to, 'from', from)
    console.log("||| completionRatio", completionRatio)
    console.log("||| value", value)
    */
    return value;
};
exports.default = interpolate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJwb2xhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvaW50ZXJwb2xhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxNQUFNLFdBQVcsR0FBZ0IsQ0FBQyxFQUNoQyxlQUFlLEdBQUcsR0FBRyxFQUNyQixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQ2xCLEVBQUUsRUFBRTtJQUNILE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxlQUFlLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7SUFDbEQ7Ozs7TUFJRTtJQUNGLE9BQU8sS0FBSyxDQUFBO0FBQ2QsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsV0FBVyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGcmFjdGlvbiB9IGZyb20gXCJ+XCJcblxudHlwZSBJbnRlcnBvbGF0ZSA9IChhcmdzOiB7XG4gIGNvbXBsZXRpb25SYXRpbzogRnJhY3Rpb25cbiAgcmFuZ2U6IFt0bzogbnVtYmVyLCBmcm9tOiBudW1iZXJdXG59KSA9PiBudW1iZXJcblxuY29uc3QgaW50ZXJwb2xhdGU6IEludGVycG9sYXRlID0gKHtcbiAgY29tcGxldGlvblJhdGlvID0gMC41LFxuICByYW5nZTogW3RvLCBmcm9tXSxcbn0pID0+IHtcbiAgY29uc3QgdmFsdWUgPSBmcm9tICsgY29tcGxldGlvblJhdGlvICogKHRvIC0gZnJvbSlcbiAgLypcbiAgY29uc29sZS5sb2coJ3x8fCB0bycsIHRvLCAnZnJvbScsIGZyb20pXG4gIGNvbnNvbGUubG9nKFwifHx8IGNvbXBsZXRpb25SYXRpb1wiLCBjb21wbGV0aW9uUmF0aW8pXG4gIGNvbnNvbGUubG9nKFwifHx8IHZhbHVlXCIsIHZhbHVlKVxuICAqL1xuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJwb2xhdGVcbiJdfQ==