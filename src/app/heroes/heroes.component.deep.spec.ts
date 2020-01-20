import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroesComponent } from "./heroes.component"
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "../hero/hero.component";

describe('HeroesComponent (deep tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'SpiderDude', strength: 8 },
            { id: 2, name: 'Wonderful Woman', strength: 24 },
            { id: 3, name: 'SuperDude', strength: 55 }
        ];
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                HeroComponent
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });

        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('should render each hero as a hero component', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        // run ngOnInit
        fixture.detectChanges();

        const HeroComponentDebugElements = fixture.debugElement.queryAll(By.directive(HeroComponent))

        expect(HeroComponentDebugElements.length).toEqual(3);
        expect(HeroComponentDebugElements[0].componentInstance.hero.name).toEqual('SpiderDude');
        expect(HeroComponentDebugElements[1].componentInstance.hero.name).toEqual('Wonderful Woman');
        expect(HeroComponentDebugElements[2].componentInstance.hero.name).toEqual('SuperDude');

        for(let i = 0; i++; i < 4) {
            expect(HeroComponentDebugElements[i].componentInstance.hero).toEqual(HEROES[i]);
        }
    });

})