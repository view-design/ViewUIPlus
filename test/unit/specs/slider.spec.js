import { expect } from 'chai';
import Slider from '../../../src/components/slider/slider.vue';

describe('Slider release bounds', () => {
    it('clamps the commit to bounds changed during dragging', () => {
        const changes = [];
        const state = {
            min: 0, max: 100, step: 1, range: false,
            dragging: true, pointerDown: 'min', currentValue: [85, 100],
            $refs: { minTooltip: { visible: true } },
            $emit: (event, value) => changes.push([event, value]),
            handleFormItemChange: () => {}
        };
        Object.keys(Slider.methods).forEach(key => {
            state[key] = Slider.methods[key].bind(state);
        });
        Object.defineProperty(state, 'exportValue', {
            get: () => Slider.computed.exportValue.call(state)
        });
        state.max = 60;
        state.onPointerDragEnd();
        expect(changes).to.deep.equal([['on-change', 60]]);
        expect(state.currentValue).to.deep.equal([60, 60]);
    });
});
