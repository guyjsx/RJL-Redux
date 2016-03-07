import {customAttribute, inject} from 'aurelia-framework';
import select2 from 'select2'; // install the select2 jquery plugin

@customAttribute('select2')
@inject(Element)
export class Select2CustomAttribute {
    constructor(element) {
        this.element = element;
    }

    attached() {
        $(this.element)
            .select2(this.value)
            .on('change', evt => {
                if (evt.originalEvent) { return; }
                this.element.dispatchEvent(new Event('change'));
            });
    }

    

    detached() {
        $(this.element).select2('destroy');
    }
}