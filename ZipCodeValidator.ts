/**
 * Created by xiepan on 2016/10/27.
 */

import {StringValidator} from "./Validation";

export const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export {ZipCodeValidator};
export {ZipCodeValidator as mainValidator};




