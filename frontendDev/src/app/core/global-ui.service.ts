import { Injectable, NgZone } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 1023;

@Injectable({
    providedIn: 'root'
})

export class GlobalUiService {

    /***********************************************************************************************
    members
    ***********************************************************************************************/

    private mediaMatcher: MediaQueryList;

    /***********************************************************************************************
    constructor
    ***********************************************************************************************/

    constructor(private zone: NgZone) {
        this.init();
    }

    /***********************************************************************************************
    private
    ***********************************************************************************************/

    private init(): void {

        this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

        this.mediaMatcher.addListener(mql =>
            this.zone.run(() => this.mediaMatcher = mql)
        );
    }

    /***********************************************************************************************
    public
    ***********************************************************************************************/

    isScreenSmall(): boolean {
        return this.mediaMatcher.matches;
    }

    deepClone(obj:any):any {

        // return value is input is not an Object or Array.
        if (typeof (obj) !== 'object' || obj === null) {
            return obj;
        }

        let clone;

        if (Array.isArray(obj)) {
            clone = obj.slice();  // unlink Array reference.
        } else {
            clone = Object.assign({}, obj); // Unlink Object reference.
        }

        let keys = Object.keys(clone);

        for (let i = 0; i < keys.length; i++) {
            clone[keys[i]] = this.deepClone(clone[keys[i]]); // recursively unlink reference to nested objects.
        }

        return clone; // return unlinked clone.
    }
}
