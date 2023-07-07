import { updateUI } from '../src/client/js/updateUI.js';

test('Document should not be defined', () => {
    expect(() => updateUI("test")).toThrow(/document is not defined/);
});