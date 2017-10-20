"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function forbiddenStringValidator(strReg) {
    return (control) => {
        const str = control.value;
        const invalid = strReg.test(str);
        return invalid ? { 'forbiddenString': { str } } : null;
    };
}
exports.forbiddenStringValidator = forbiddenStringValidator;
//# sourceMappingURL=forbidden-string.validator.js.map