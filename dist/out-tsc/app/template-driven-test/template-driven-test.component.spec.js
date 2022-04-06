import { TestBed } from '@angular/core/testing';
import { TemplateDrivenTestComponent } from './template-driven-test.component';
describe('TemplateDrivenTestComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TemplateDrivenTestComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(TemplateDrivenTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=template-driven-test.component.spec.js.map