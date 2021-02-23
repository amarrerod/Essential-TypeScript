
import { sum } from "./calculator";

test("Check result value", () => {
    let result = sum(10, 20, 30);
    expect(result).toBe(60);
});