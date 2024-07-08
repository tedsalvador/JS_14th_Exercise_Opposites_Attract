import { describe, expect, it } from 'vitest';
import { calculateisLove } from "/js/calculateisLove.js";

describe('Numero Petalos de cada flor, para ver si estan enamorados', () => {
    
    it('Timmy : 1 / Sarah : 4 should return : true', () => {
        //Aceptance Criteria
        // Given
        const flower1 = 1;
        const flower2 = 4;
        //When - Action
        const result = calculateisLove(flower1, flower2)
        //Then
        expect(result).toBe(true)
    });

    it('Timmy : 2 / Sarah : 2 should return : false', () => {
        //Aceptance Criteria
        // Given
        const flower1 = 2;
        const flower2 = 2;
        //When - Action
        const result = calculateisLove(flower1, flower2)
        //Then
        expect(result).toBe(false)
    });

    it('Timmy : 0 / Sarah : 1 should return : true', () => {
        //Aceptance Criteria
        // Given
        const flower1 = 0;
        const flower2 = 1;
        //When - Action
        const result = calculateisLove(flower1, flower2)
        //Then
        expect(result).toBe(true)
    });

    it('Timmy : 0 / Sarah : 0 should return : false', () => {
        //Aceptance Criteria
        // Given
        const flower1 = 0;
        const flower2 = 0;
        //When - Action
        const result = calculateisLove(flower1, flower2)
        //Then
        expect(result).toBe(false)
    });

});