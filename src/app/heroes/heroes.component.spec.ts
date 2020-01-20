import { HeroesComponent } from "./heroes.component"
import { of } from "rxjs";
import { Hero } from "../hero";


describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'SpiderDude', strength: 8 },
            { id: 2, name: 'Wonderful Woman', strength: 24 },
            { id: 3, name: 'SuperDude', strength: 55 }
        ];

        // create mock hero service with the methods in an array of strings
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        component = new HeroesComponent(mockHeroService);
    });

    describe('delete', () => {

        it('should remove the indicated hero from the heroes list', () => {
            // we need our mockObject to return an observable when a hero is deleted, this is how we do it
            // 'and' property is from jasmine (test writing tool), we want an observable so we call the of method and pass in true - easy way to create an observable
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        });

        // make sure that the components delete method calls the hero service delete hero method

        it('should call deleteHero with a hero object', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);

        });
    });

    describe('addHero', () => {

        it('should add a hero to the list', () => {
            mockHeroService.addHero.and.returnValue(of(true));
            component.heroes = HEROES;
            let hero = { id: 4, name: 'Added Hero', strength: 41 };
            
            component.add('New Hero');

            expect(component.heroes.length).toBe(4);
        })
    })
});