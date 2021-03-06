import { TestBed, inject } from "@angular/core/testing"
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HeroService', () => {

    let mockMessageService;
    //let httpTestingController: HttpTestingController;
    //let service: HeroService;

    beforeEach(() => {

        mockMessageService = jasmine.createSpyObj(['add']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                HeroService,
                { provide: MessageService, useValue: mockMessageService }
            ]
        })

        // find the service that correlates to this type
        // httpTestingController = TestBed.get(HttpTestingController);
        // service = TestBed.get(HeroService);
    })

    describe('getHero', () => {

        // another way to inject services into the test
        it('should call get with the correct URL',
            inject([HeroService, HttpTestingController],
            (service: HeroService, controller: HttpTestingController) => {
            service.getHero(4).subscribe();

            const request = controller.expectOne('api/heroes/4');

            request.flush({ id: 4, name: 'SuperDude', strength: 100});
            controller.verify();
        }))
    })
})