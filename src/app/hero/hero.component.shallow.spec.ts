import { TestBed, ComponentFixture } from "@angular/core/testing"
import { HeroComponent } from "./hero.component"
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HeroComponent (shallow tests)', () => {

    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        // test bed (special module created specifically for testing purposes)
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            // in this module ignore any unknown values (such as routing module that isn't imported)
            schemas: [NO_ERRORS_SCHEMA]
        });

        // createComponent returns a component fixture which is basically a wrapper for the component
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };

        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    })

    it('should render the hero name in an anchor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
        // allows the test to account for data binding
        fixture.detectChanges();

        // alternate way to get the text content of the a tag using the debug element
        let deA = (fixture.debugElement.query(By.css('a')));
        expect(deA.nativeElement.textContent).toContain('SuperDude');

        // native element gets a handle to the dom element that represents that container for the html template
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    })
})